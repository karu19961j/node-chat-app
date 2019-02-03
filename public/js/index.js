let socket = io();

socket.on("connect", function() {
  console.log("connected to server");
});
socket.on("disconnect", function() {
  console.log("disconnected");
});
socket.on("newMessage", function(data) {
  console.log(data, "message");
});
// socket.emit("createMessage", {
//   from: "Test",
//   text: "hello"
// });
