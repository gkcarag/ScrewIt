// protocode for server connectivity
// currently using express.js and mysql
// may need to install mysqli (mysql might be deprecated)

const express = require('express');
const app = express();

const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'testdb',
});
// need to test the below commands, sql statements not properly coded yet
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