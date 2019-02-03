const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const port = process.env.PORT || 3000;

const app = express();
let server = http.createServer(app);
let io = socketIO(server);
const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("New user connected");
  socket.on("disconnect", () => {
    console.log("disconnected to client");
  });
  socket.on("createMessage", data => {
    io.emit("newMessage", {
      from: data.from,
      text: data.text,
      createAt: new Date().getTime()
    });
  });
});
server.listen(port, () => {
  console.log(`server is up on port:${port}`);
});
