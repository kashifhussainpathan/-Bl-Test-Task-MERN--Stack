import { io } from "socket.io-client";
import { createContext, useContext, useEffect, useState } from "react";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("ws://localhost:5000");

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const value = { socket };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};
