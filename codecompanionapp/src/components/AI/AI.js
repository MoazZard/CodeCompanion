import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AI = () => {
    const [prompt, setPrompt] = useState("");
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Initialize Gemini AI
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response
            setHistory((prevHistory) => [
                ...prevHistory,
                { type: "user", message: prompt },
                { type: "bot", message: response.text() },
            ]);

        } catch (error) {
            console.error("Error generating content:", error);
        } finally {
            setIsLoading(false);
            setPrompt(""); // Clear the input after submission
        }
    };

    return (
        <div className="flex-column m-5 p-5">
            <h1>Your AI Companion</h1>

            <div className="mt-4">
                <div
                    className="border p-3"
                    style={{
                        height: "300px",         // Set fixed height for the chat history
                        overflowY: "auto"        // Enable vertical scrolling
                    }}
                >
                    {history.length > 0 ? (
                        history.map((entry, index) => (
                            <div
                                key={index}
                                className={`my-2 p-2 rounded ${entry.type === "user" ? "text-end bg-light" : "text-start bg-secondary text-white"
                                    }`}
                                style={{ alignSelf: entry.type === "user" ? "flex-end" : "flex-start" }}
                            >
                                <strong>{entry.type === "user" ? "User" : "AI"}:</strong> {entry.message}
                            </div>
                        ))
                    ) : (
                        <p>No results yet.</p>
                    )}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <label htmlFor="promptInput" className="form-label">
                        Enter your prompt:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="promptInput"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Type your prompt here..."
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default AI;