import http from "http";
import dotenv from "dotenv";
import { app } from "./app.js";
import { Server } from "socket.io";
import connectDB from "./db/index.js";
import { getConversation } from "./socket/index.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("user connected");

  //send message
  socket.on("sendMessage", (data) => {
    const conversation = getConversation();

    socket.emit("conversation updated", conversation);
    socket.to(receiverId).emit("conversation updated", conversation);
  });
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to BI Test Task");
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
