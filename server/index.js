const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("connection_data", (data) => {
    socket.join(data.room);
    console.log(`User with ID: ${socket.id} & USERNAME: ${data.username} joined ROOM: ${data.room}`);

    socket.to(data.room).emit("username", data.username)

  });
});

server.listen(3001, () => {
  console.log("Server is running");
});
