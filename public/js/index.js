let socket = io();

socket.on("connect", function() {
  console.log("connected to server");
});
socket.on("disconnect", function() {
  console.log("disconnected");
});
socket.on("newMessage", function(data) {
  console.log(data, "message");
  let li = jQuery("<li></li>");
  li.text(`${data.from}: ${data.text}`);
  jQuery("#messages").append(li);
});

jQuery("#message-form").on("submit", function(e) {
  e.preventDefault();
  socket.emit(
    "createMessage",
    {
      from: "User",
      text: jQuery("[name=message]").val()
    },
    function() {}
  );
});
