import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

export default function Chat() {

    const [question, setQuestion] = useState("");

    const [messages, setMessages] = useState([
        {
            id: 1,
            role: "user",
            message: "Explain Machine Learning."
        },
        {
            id: 2,
            role: "assistant",
            message:
                "Machine Learning is a branch of Artificial Intelligence that enables computers to learn patterns from data without being explicitly programmed."
        }
    ]);

    const conversations = [
        "Machine Learning",
        "Python Notes",
        "FastAPI Guide",
        "JWT Authentication",
        "React Tutorial",
        "Database Design",
        "Interview Questions"
    ];

    const sendQuestion = () => {

        if (question.trim() === "") return;

        setMessages([
            ...messages,
            {
                id: Date.now(),
                role: "user",
                message: question
            },
            {
                id: Date.now() + 1,
                role: "assistant",
                message:
                    "AI response will appear here after backend integration."
            }
        ]);

        setQuestion("");
    };

    return (

        <MainLayout>

    <div className="page-header">
        <h1>AI Chat Assistant</h1>
        <p>Ask questions about your uploaded documents.</p>
    </div>

    <div className="chat-layout">

        {/* LEFT SIDEBAR */}

        <div className="chat-sidebar card">

            <button className="primary-btn full-width">
                 New Chat
            </button>

            <h3>Conversation History</h3>

            <ul className="conversation-list">

                {conversations.map((item, index) => (

                    <li key={index}>
                        {item}
                    </li>

                ))}

            </ul>

        </div>

        {/* CHAT */}

        <div className="chat-main">

            <div className="card chat-window">

                {messages.map((msg) => (

                    <div
                        key={msg.id}
                        className={
                            msg.role === "user"
                                ? "message user-message"
                                : "message ai-message"
                        }
                    >

                        <strong>
                            {msg.role === "user"
                                ? "You"
                                : "AI Assistant"}
                        </strong>

                        <p>{msg.message}</p>

                    </div>

                ))}

            </div>

            <div className="card chat-input-card">

                <textarea

                    rows="3"

                    placeholder="Ask anything about your uploaded documents..."

                    value={question}

                    onChange={(e) =>
                        setQuestion(e.target.value)
                    }

                />

                <div className="chat-actions">

                    <button
                        className="primary-btn"
                        onClick={sendQuestion}
                    >
                        Send
                    </button>

                    <button
                        className="delete-btn"
                        onClick={() => setMessages([])}
                    >
                        Clear Chat
                    </button>

                </div>

            </div>

        </div>

    </div>

</MainLayout>
    );

}