
const express = require("express");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();

const PORT = 3000;


// OpenAI client
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


// Middleware
app.use(express.json());


// Serve HTML, CSS and JavaScript
app.use(express.static("public"));


// AI chatbot endpoint
app.post("/api/chat", async (req, res) => {

    try {

        const userMessage = req.body.message;


        // Check message
        if (!userMessage || userMessage.trim() === "") {

            return res.status(400).json({
                error: "Message is required."
            });

        }


        // Send question to OpenAI
        const response = await client.responses.create({

            model: "gpt-5.6-luna",

            instructions: `
You are a GST information assistant.

Your job is to answer questions related to
Goods and Services Tax (GST) in India.

Rules:

1. Give clear and simple answers.
2. Use easy language suitable for beginners.
3. Explain GST concepts step by step when useful.
4. Do not invent GST rules, rates, deadlines or legal requirements.
5. If a question depends on current GST rules,
   tell the user that they should verify the latest
   information from official GST/CBIC sources.
6. Do not present yourself as a tax lawyer or
   government official.
7. If the question is unrelated to GST, politely
   explain that you are designed primarily for GST
   related questions.
`,

            input: userMessage

        });


        // Get AI answer
        const answer = response.output_text;


        // Send answer back to browser
        res.json({
            answer: answer
        });


    } catch (error) {

        console.error("AI Error:", error);

        res.status(500).json({
            error: "Sorry, something went wrong while processing your question."
        });

    }

});


// Start server
app.listen(PORT, () => {

    console.log(
        `GST Chatbot running at http://localhost:${PORT}`
    );

});
