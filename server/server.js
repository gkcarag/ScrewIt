// protocode for server connectivity
// note: install nodemon for automatic refresh whenever changes are detected
const express = require('express');
const app = express();

const pgp = require('pg-promise');

//const cors = require("cors"); //cross-origins resource sharing, need to npm install

//app.use(cors());
app.use(express.json()); //*this might be for react.js only

// **heroku database credentials change periodically! if it doesnt work, info must be updated
const db = pgp('') //update this to herkou credentials
db.connect() 

//FINALLY WORKS - had to alter authentication method and flush privileges
app.get('/', (req,res) => {
   //res.send("get request (server using port 3000)");
    const sqlInsert = "INSERT INTO users (username, password) VALUES ('brucewayne','bats1');";
    db.query(sqlInsert, (err, result)=> {
    res.send("get request");
    });
});

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
});
/*
app.post('/users', function(req,res){
    connection.query('insert into', function(error,rows,fields){
        if(errror) console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    })
});

app.put('/users', function(req,res){
    connection.query('update', function(error,rows,fields){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    })
});

app.delete('/users', function(req,res){
    connection.query('delete from ', function(error,rows,fields){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    })
});
*/