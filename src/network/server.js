var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", function(socket) {
  console.log("un utilisateur est connecté");
  socket.on("chat message", function(msg) {
    //Chat message est la clée
    console.log("message: " + JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

http.listen(3001, function() {
  console.log("Le serveur est démarré *:3001");
});
