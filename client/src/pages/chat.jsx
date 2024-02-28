import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../features/userSlice";
import { useSocket } from "../hooks/useSocket";
import Conversation from "../components/conversation";

const Chat = () => {
  const { socket } = useSocket();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const { user, users } = useSelector(({ user }) => user);

  const [newConversation, setNewConversation] = useState({
    senderId: user?._id,
    receiverId: "",
  });

  const getUsers = async () => {
    try {
      const {
        data: { data },
        status,
      } = await axios.get("http://localhost:5000/api/v1/users");

      if (status === 200) {
        dispatch(setUsers(data));
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const handleSetConversation = (receiverId) => () => {
    setNewConversation((prev) => ({ ...prev, receiverId }));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section>
      <aside>
        {users?.map(({ _id, name, email }) => {
          const intials = name
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase();

          return (
            <div key={_id} onClick={handleSetConversation(_id)}>
              <img
                src={`https://ui-avatars.com/api/?name=${intials}/?rounded=true`}
                alt={name}
                style={{ width: "50px" }}
              />

              <h3>{name}</h3>
            </div>
          );
          //email === user?.email ? null :
        })}

        {error && <p>{error}</p>}
      </aside>

      {/* conversation */}
      <section>
        <Conversation newConversation={newConversation} />
      </section>
    </section>
  );
};

export default Chat;
