// protocode for server connectivity
// currently using express.js and mysql
const express = require('express');
const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'testdb'
});

const server = app.listen(4545,function(){
    const host = server.address().address
    const port = server.address().port
})

connection.connect(function(err){
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

app.get('/users', function(req,res){
    connection.query('select * from users', function(error,rows, fields){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    })
});