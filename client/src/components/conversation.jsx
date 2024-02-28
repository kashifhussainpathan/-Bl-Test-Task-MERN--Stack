import React from "react";
import useSocket from "../hooks/useSocket";

const Conversation = ({ newConversation }) => {
  const { socket } = useSocket();

  const [conversation, setConversation] = useState(null);

  useEffect(() => {
    socket.on("conversation updated", (updatedConversation) => {
      setConversation(updatedConversation);
    });

    return () => {
      socket.off("conversation updated");
    };
  }, [socket, newConversation]);

  return (
    <div>
      {conversation?.map(({ content, timestamp }) => (
        <div key={timestamp}> {content} </div>
      ))}
    </div>
  );
};

export default Conversation;
