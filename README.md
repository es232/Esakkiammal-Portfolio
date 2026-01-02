# Esakkiammal G | Portfolio

A professional, full-stack portfolio featuring a high-end dark-themed UI, a functional contact form powered by Nodemailer, and a custom AI-powered chatbot.

## 🚀 Project Overview

This portfolio is designed to showcase modern web development capabilities, focusing on "clarity, curiosity, and quiet excellence." It features a split-layout contact section and a glassmorphic design language.

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express.js
- **Integrations**: 
  - **Nodemailer**: For secure email delivery via Gmail SMTP.
  - **Google Gemini API**: Powering the interactive AI chatbot.
- **Animations**: ScrollReveal, Framer Motion, Lucide React icons

## 📂 Project Structure

```text
├── backend/              # Node.js/Express server
│   ├── routes/           # API endpoints (Chat & Contact)
│   └── server.ts         # Main entry point
├── src/                  # React Frontend
│   ├── components/       # UI & Section components
│   └── pages/            # Page layouts
├── public/               # Static assets (Favicons, etc.)
└── package.json          # Project dependencies

⚙️ Local Development Setup
1. Prerequisites
Node.js: Version 18 or higher.

Gmail App Password: Required for Nodemailer. Generate here.

Gemini API Key: Required for the chatbot. Get it here.

2. Installation
Clone the repository and install dependencies for both frontend and backend:

Bash

# Clone the repo
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git]
cd YOUR_REPO_NAME

# Install Root/Frontend dependencies
npm install

# Install Backend dependencies
cd backend
npm install
cd ..
3. Environment Variables
Create a .env file inside the backend/ folder:

Code snippet

PORT=5000
GEMINI_API_KEY=your_gemini_api_key_here
EMAIL_USER=esakkiammalg1011@gmail.com
EMAIL_PASS=your_16_digit_gmail_app_password
4. Running the App
Open two terminals:

Terminal 1 (Backend):

Bash

cd backend
npm run dev
Terminal 2 (Frontend):

Bash

npm run dev
🌐 Deployment Guide
Backend (Render)
Create a New Web Service on Render.

Set Root Directory to backend.

Set Start Command to node server.ts (or npm start).

Add your .env variables in the Render "Environment" settings.

Frontend (Vercel)
Import the repository into Vercel.

Add the Environment Variable: VITE_API_URL = https://your-backend-url.onrender.com.

Deploy.