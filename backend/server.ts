import "dotenv/config";
import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat.ts";
import contactRouter from "./routes/contact.ts"; // 1. Import the new router

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chat", chatRouter);
app.use("/api/contact", contactRouter); // 2. Register the contact route

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});