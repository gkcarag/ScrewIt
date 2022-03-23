// protocode for server connectivity
// note: install nodemon for automatic refresh whenever changes are detected
const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
//const chatPORT = 3000;  //<-- original before test changes 

// testing database connectivity

const PORT = process.env.PORT || 3000;
/*
const pool = require("./db");
const cors = require("cors"); //cross-origins resource sharing, need to npm install
app.use(cors());
app.use(express.json()); //*this might be for react.js only
const path = require("path");

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../server")));
}

console.log(__dirname);
console.log(path.join(__dirname, "../server"));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
*/

// chat code, currently not functioning because of database code?

io.on("connection", socket =>{
    console.log("a user connected");
    socket.on("chat message", msg => {
        console.log(msg);
        io.emit("chat message", msg);
    })
});  

server.listen(PORT, () => console.log("chat server running on port: " + PORT));


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