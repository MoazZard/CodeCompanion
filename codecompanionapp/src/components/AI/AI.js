import React, { useState } from "react";

const AI = () => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically call an API or some function to get results
        // For demonstration purposes, let's just echo the prompt as the result
        setResult(`You entered: ${prompt}`);
        setPrompt(''); // Clear the input after submission
    };

    return (
        <div className="flex-column m-5 p-5">
            <h1>Your AI Companion</h1>

            <div className="mt-4">
                <div className="border p-3">
                    {result || "No results yet."}
                </div>
            </div>
            
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <label htmlFor="promptInput" className="form-label">Enter your prompt:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="promptInput" 
                        value={prompt} 
                        onChange={(e) => setPrompt(e.target.value)} 
                        placeholder="Type your prompt here..." 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AI;