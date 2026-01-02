import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
 console.log("Contact request received:", req.body);
  // 1. Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 2. Define email options
  const mailOptions = {
    from: email, 
    to: process.env.EMAIL_USER, // Sends the message TO yourself
    subject: `New Portfolio Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #e11d48;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p style="margin-top: 20px;"><strong>Message:</strong></p>
        <p style="background: #f9f9f9; padding: 15px;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

export default router;