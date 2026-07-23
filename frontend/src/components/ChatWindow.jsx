export default function ChatWindow({ messages }) {
    return (
        <div className="chat-window">

            {messages.map((msg, index) => (

                <div
                    key={index}
                    className={
                        msg.sender === "user"
                            ? "user-message"
                            : "assistant-message"
                    }
                >
                    <strong>
                        {msg.sender === "user"
                            ? "You"
                            : "AI"}
                    </strong>

                    <p>{msg.message}</p>

                    {msg.sources &&
                        msg.sources.length > 0 && (

                            <div className="sources">

                                <strong>Sources:</strong>

                                <ul>

                                    {msg.sources.map((source, i) => (

                                        <li key={i}>
                                            {source.document_name || source.document_id}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                        )}

                </div>

            ))}

        </div>
    );
}