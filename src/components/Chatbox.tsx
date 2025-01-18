import React, { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");


const Chatbox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Set this in your .env file
  });

  const openai = new OpenAIApi(configuration);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, `You: ${input}`]);
    setLoading(true);

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      });

      const botMessage = response.data.choices[0]?.message?.content || "No response";
      setMessages((prev) => [...prev, `gitaGPT: ${botMessage}`]);
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
      setMessages((prev) => [...prev, "gitaGPT: Sorry, something went wrong."]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow">
        <div className="h-96 overflow-y-scroll p-2 border border-gray-300 rounded">
          {messages.map((message, index) => (
            <p key={index} className="mb-2 text-gray-800">
              {message}
            </p>
          ))}
        </div>
        <div className="flex items-center mt-4">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
            onClick={handleSend}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;