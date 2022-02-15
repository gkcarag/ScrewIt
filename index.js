const express = require("express");
const http = require("http"); //new <-
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server); // maybe change this???
const port = 3000;

io.on("connection", socket => {
    console.log("User Connected");
    socket.on("chat message", msg => {
        console.log(msg);
        io.emit("chat message", msg);
    });
});
server.listen(port, () => console.log("server running on port: " + port));