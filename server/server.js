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
const { a } = require('aws-amplify');

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
  client.on("submitVerse", outputVerse);
  client.on("socketDisc", socketDisc);
  client.on("getRoomName", getID);
  client.on("destroyRoom", destroyRoom);

  function getID() {
    const currentRoom = rooms[Object.keys(rooms)[0]];
    const currRoom = currentRoom[Object.keys(currentRoom)[0]];
    //const tempRoom = currentRoom[Object.keys(currentRoom)[0]];
    io.emit("updateID", currRoom);
  }

  function chatMessage(msg) {
    console.log(msg);
    //io.to(roomName).emit("chat message", msg);
    io.emit("chat message", msg)
  }

  function outputVerse(msg) {
    io.emit("outputVerse", msg);
  }

  function createRoom(user) {
    const RoomID = makeUniqueID();
    const room = {
      "id": RoomID,
      "users": []
    }
    rooms[room.id] = room;
    joinRoom(user, RoomID);
    //io.to(room.id).emit("chat message", room.id); 
  }

  function makeUniqueID() {
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var roomID = "";
    for(let i = 0; i < 5; i++) {
      roomID += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return roomID;
  } 

  function joinRoom(user, roomID) {
    const joinedRoom = rooms[roomID];
    joinedRoom.users.push({
      "username": user,
      "id": client.id
    });
    client.join(roomID);
    console.log("join room new id is: " + roomID);
    io.emit("updateRoomID", roomID);
    showRooms();
  }

  function socketDisc() {
    console.log("user disconnected");
  }

  function showRooms() {
    console.log("Outputting Rooms: ");
    console.log(rooms);

  }

  function destroyRoom(roomID) {
    
  }
});


server.listen(chatPORT, () => console.log("Chat server running on port: " + chatPORT));


/*
  function checkRooms(roomName) {
    for(let i = 0; i < rooms.length; i++) {
      if(roomName == rooms[i]) {
        return false;
      }
    }
    return true; 
  }
  */

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