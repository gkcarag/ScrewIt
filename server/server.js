// protocode for server connectivity
// note: install nodemon for automatic refresh whenever changes are detected
const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3000;

//const pgp = require('pg-promise')();

//const cors = require("cors"); //cross-origins resource sharing, need to npm install

//app.use(cors());
//app.use(express.json()); //*this might be for react.js only

io.on("connection", socket =>{
    console.log("a user connected");
    socket.on("chat message", msg => {
        console.log(msg);
        io.emit("chat message", msg);
    })
});

server.listen(port, () => console.log("server running on port: " + port));


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