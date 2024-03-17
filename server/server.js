import express from 'express';
import mysql from 'mysql2';
const port = 5000;
const app = express();

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'cafe_system',
    password:""
})

app.get('/users', (req, res)=>{
    pool.query('select * from users', (err, value)=>{
        if(err){console.log(err);}
        else{
            console.log(value)
        }
        res.send(value)
    })

    
})

app.listen(port, ()=>{
    console.log("nigga server started at 5000");
})