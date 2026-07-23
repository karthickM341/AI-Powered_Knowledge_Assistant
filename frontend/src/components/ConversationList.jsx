export default function ConversationList({
    conversations
}) {

    return (

        <div className="conversation-list">

            <h3>History</h3>

            {conversations.map((conv) => (

                <div
                    className="conversation-item"
                    key={conv.conversation_id}
                >

                    {conv.title}

                </div>

            ))}

        </div>

    );

}