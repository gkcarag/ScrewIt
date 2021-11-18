// protocode for server connectivity
// currently using express.js and mysql
// may need to install mysqli (mysql might be deprecated)

const express = require('express');
const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost', //will need to change this to phone device
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

// need to test the below commands, sql statements not properly coded yet
app.get('/users', function(req,res){
    connection.query('select * from users', function(error,rows,fields){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    })
});

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
})