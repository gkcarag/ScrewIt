//testing push notifications for discord

// 
// We are going to initialize express method to a constant 
//  variable app and then create the http server with app variable. 
//After that, we are going to listen to the server using socket.io library

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

io.on("connection", socket => {
    console.log("a user connected :D");
    socket.on("chat message", msg => {
      console.log(msg);
      io.emit("chat message", msg);
    });
  });

  server.listen(port, () => console.log("server running on port:" + port));
