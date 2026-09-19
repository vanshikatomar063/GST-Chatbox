GST Chatbot 🇮🇳

An AI-powered GST Chatbot website designed to provide users with simple and understandable information about Goods and Services Tax (GST) in India.

The project uses HTML, CSS, JavaScript, Node.js, Express, and the OpenAI API.

📌 Project Overview

The GST Chatbot allows users to ask questions related to GST through a simple chat interface.

Users can ask questions such as:

What is GST?

What is GSTIN?

What is CGST?

What is SGST?

What is IGST?

What is Input Tax Credit?

What is GST registration?

What is GSTR-1?

What is GSTR-3B?

What is an E-Way Bill?

What is an E-Invoice?

What is the Composition Scheme?

What is Reverse Charge Mechanism?

The chatbot sends the user's question to a backend server, which communicates with an AI model and returns the response to the website.

✨ Features

💬 Interactive chatbot interface

🤖 AI-generated GST responses

🇮🇳 GST-focused assistant

📱 Responsive web design

⌨️ Send messages using the Enter key

🔄 Loading/Thinking indicator

🧾 GST-related questions and answers

🔐 API key stored securely using environment variables

⚡ Node.js + Express backend

🎨 HTML and CSS frontend

🛠️ Technologies Used
Frontend

HTML5

CSS3

JavaScript

Backend

Node.js

Express.js

AI

OpenAI API

Other

dotenv

npm

📁 Project Structure
GST-Chatbot/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md

🚀 Installation
1. Clone or download the project

Download the project to your computer.

Open the project folder in VS Code.

2. Install Node.js

Make sure Node.js is installed.

Check the installation:

node --version


Also check npm:

npm --version

3. Install dependencies

Open the terminal inside the project folder and run:

npm install


If the packages have not been installed yet, run:

npm install express openai dotenv

🔑 API Key Setup

Create a file named:

.env


in the main project directory.

Add:

OPENAI_API_KEY=your_api_key_here


Replace your_api_key_here with your actual API key.

⚠️ Security

Never put your API key directly inside:

public/script.js


or:

index.html


Do not upload your .env file to GitHub.

Your .gitignore should contain:

node_modules
.env

▶️ Running the Project

Start the server using:

node server.js


You should see something similar to:

GST Chatbot running at http://localhost:3000


Open your browser and visit:

http://localhost:3000

💬 Example Questions

Try asking:

What is GST?

What is GSTIN?

What is CGST?

What is SGST?

What is IGST?

What is Input Tax Credit?

How does GST registration work?

What is GSTR-1?

What is GSTR-3B?

What is an E-Way Bill?

What is an E-Invoice?

🧠 How It Works

The application follows this architecture:

              USER
                │
                ▼
        ┌───────────────┐
        │   Frontend    │
        │ HTML/CSS/JS   │
        └───────┬───────┘
                │
                │ HTTP Request
                ▼
        ┌───────────────┐
        │ Node.js       │
        │ Express       │
        │ Backend       │
        └───────┬───────┘
                │
                │ API Request
                ▼
        ┌───────────────┐
        │   AI Model    │
        │  OpenAI API   │
        └───────┬───────┘
                │
                │ AI Response
                ▼
        ┌───────────────┐
        │ Node.js       │
        │ Backend       │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │   Chatbot UI  │
        └───────────────┘

📂 Main Files
index.html

Contains the structure of the chatbot interface.

It includes:

Chat header

Chat area

User messages

Bot messages

Input field

Send button

style.css

Controls the appearance of the website.

It contains:

Colors

Fonts

Chat bubbles

Buttons

Layout

Responsive styling

script.js

Handles frontend functionality.

It:

Reads the user's question

Sends the question to the backend

Displays the user's message

Displays the AI response

Shows a loading state

Supports the Enter key

server.js

This is the backend server.

It:

Starts the Express server

Serves the frontend

Receives chatbot questions

Communicates with the OpenAI API

Sends the AI response back to the browser

.env

Stores sensitive configuration such as the API key.

Example:

OPENAI_API_KEY=your_api_key_here


This file should remain private.

🔒 Security

For development, the API key is stored in .env.

Never expose the API key in client-side JavaScript.

Bad:

const apiKey = "your-secret-api-key";


Good:

.env


with:

OPENAI_API_KEY=your_api_key_here


The backend reads the key using:

process.env.OPENAI_API_KEY

⚠️ GST Information Disclaimer

This chatbot is intended for educational and informational purposes.

GST rates, procedures, filing requirements, exemptions, deadlines, and other tax rules can change.

Users should verify important or current GST information through official government sources or consult a qualified tax professional where appropriate.

The chatbot should not be treated as a substitute for professional tax or legal advice.

🔮 Future Improvements

Possible future features include:

🌐 Hindi and English language support

💾 Conversation history

👤 User login and registration

🔍 GST information search

📚 GST knowledge base

📑 Official GST document references

🧾 GST invoice generator

🧮 GST calculator

📱 Improved mobile UI

🎤 Voice input

🔊 Text-to-speech

🌙 Dark mode

📊 Admin dashboard

🗂️ FAQ management

🔐 Authentication

🧠 RAG-based GST knowledge system

🧪 Development Phases
Phase 1 — Frontend

Built using:

HTML + CSS


Features:

Chat interface

Header

Messages

Input box

Send button

Phase 2 — JavaScript

Built using:

JavaScript


Features:

Send messages

Enter-key support

Automatic scrolling

Rule-based GST responses

Loading indicator

Phase 3 — AI Integration

Built using:

Node.js + Express + OpenAI API


Features:

AI-generated answers

Backend API

Secure API-key handling

GST-specific AI instructions

Phase 4 — Future

Planned:

GST Knowledge Base
        +
RAG
        +
Current Official Sources
        +
AI


This can make the chatbot more reliable for GST-specific information.

🎓 Project Purpose

This project can be used as a learning project for understanding:

Web development

HTML

CSS

JavaScript

Node.js

Express.js

REST APIs

Environment variables

AI API integration

Chatbot development

👨‍💻 Author

Your Name

GST Chatbot Project

📄 License

This project is intended for educational and development purposes.
