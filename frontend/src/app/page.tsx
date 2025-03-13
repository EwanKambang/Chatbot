"use client"; // This makes it a Client Component

import { FormEvent, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      const res = await axios.post("https://chatbot-raos.onrender.com", {
        message: message,
      });
      setResponse(res.data.response);
      setMessage(""); // Clear input after sending
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error occurred");
    }
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
      <p>Response: {response}</p>
    </div>
  );
}
