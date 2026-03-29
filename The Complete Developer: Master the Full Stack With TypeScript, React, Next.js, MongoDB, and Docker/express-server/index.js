const express = require("express");
const server = express();
const port = 3000;
server.get("/hello", function (req, res) {
  res.send("Hello World!");
});
server.get("/bye", function (req, res) {
  res.send(
    "Goodbye, cruel world, I'm leaving you today<br>Goodbye, goodbye, goodbye<br>Goodbye, all you people, there's nothing you can say<br>To make me change my mind, goodbye",
  );
});
server.listen(port, function () {
  console.log("Listening on " + port);
});
