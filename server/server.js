// protocode for server connectivity
// note: install nodemon for automatic refresh whenever changes are detected
const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const chatPORT = 3001;  //<-- original before test changes 

// testing database connectivity

const PORT = process.env.PORT || 3000;

const pool = require("./db");
const cors = require("cors"); //cross-origins resource sharing, need to npm install
app.use(cors());
app.use(express.json()); //*this might be for react.js only
const path = require("path");
const { randomUUID } = require('crypto');
const { ConsoleLogger } = require('@aws-amplify/core');

// routes
// add new user
app.post("/register", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = await pool.query(
      "INSERT INTO user_info (username,email,pword) VALUES ($1,$2,$3)", //RETURNING *", 
      [username, password, email]
    );
    //res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../")));
}

console.log(__dirname);
console.log(path.join(__dirname, "../"));

app.listen(PORT, () => {
  console.log(`Database Server is running on port: ${PORT}`);
});


// chat code **USES PORT 3001

const rooms = {};

io.on("connection", client => {
  console.log("a user connected");

  client.on("chat message", chatMessage);
  client.on("createRoom", createRoom);
  client.on("joinRoom", joinRoom);
  client.on("user verse", testfunc);
  client.on("socketDisc", () => console.log("user disconnected"));

  function chatMessage(msg) {
    console.log(msg);
    //io.to(roomName).emit("chat message", msg);
    io.emit("chat message",msg)
  }

  function testfunc(msg){
    io.emit("outputfunc",msg)
  }
  function createRoom(roomName) {
    checkRooms(roomName);

    const room = {
      id: roomName,
      sockets: []
    }
    joinRoom(room);
    
    //io.to(room.id).emit("chat message", room.id);
  }

  function joinRoom(room) {
    client.join(room.id);
    //room.sockets.push()
  }

  /*
  socket.on("createRoom", clientSocket => {
    const room = {
      id: clientSocket.id,
      sockets: []
    };
    rooms[room.id] = room.id;
    joinRoom(clientSocket, room);
  })

  socket.on("joinRoom", (roomId, callback) => {
    const room = rooms[roomId];
    joinRoom(socket, room);
  })
  */




});


server.listen(chatPORT, () => console.log("Chat server running on port: " + chatPORT));


/*
const joinRoom = (socket, room) => {
  room.sockets.push(socket);
  socket.join(room.id, () => {
    socket.roomId = room.id;
    console.log(socket.id, "Joined", room.id);
  })
};
*/

// database stuff
// **heroku database credentials change periodically! if it doesnt work, info must be updated
//const db = pgp('') //update this to herkou credentials
//db.connect()

//WORKS - had to alter authentication method and flush privileges
/*
app.get('/', (req,res) => {
    const sqlInsert = "INSERT INTO users (username, password) VALUES ('brucewayne','bats1');";
    db.query(sqlInsert, (err, result)=> {
    res.send("get request");
    });
});*/