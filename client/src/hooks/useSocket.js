import { useContext } from "react";
import { SocketContext } from "../context/socketContext";

export const useSocket = () => {
  const context = useContext(SocketContext);

  if (!context) {
    console.error("useSocket must be used within socketProvider!");
  }

  return context;
};
