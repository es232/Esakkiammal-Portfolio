import dotenv from 'dotenv';
dotenv.config();
import { Router } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

router.post("/", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ reply: "Messages missing" });
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: "You are Esakkiammal's portfolio AI assistant. Be concise and professional."
    });

    // --- THE FIX: Clean the history ---
    // 1. Convert 'assistant' role to 'model'
    // 2. Ensure the history starts with a 'user' message
    let history = messages.slice(0, -1).map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // Check if the very first message is from the model. 
    // If it is, Gemini will crash, so we remove it from the history.
    if (history.length > 0 && history[0].role === "model") {
      history.shift(); 
    }

    const latestMessage = messages[messages.length - 1].content;

    // Start chat with the cleaned history
    const chat = model.startChat({ history });
    const result = await chat.sendMessage(latestMessage);
    const response = await result.response;
    
    res.json({ reply: response.text() });

  } catch (error: any) {
    console.error("Chat error:", error);
    res.status(500).json({
      reply: "I'm having a connection issue. Please try again!",
    });
  }
});

export default router;