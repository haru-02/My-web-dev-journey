const express = require('express');
const app = express();

app.get('/cats',(req,res)=>{
    res.send('meow');
});

app.get('/dogs',(req,res)=>{
    res.send('woof');
});

app.get('/',(req,res)=>{
    res.send('home');
})

app.post('/cats',(req,res)=>{
    res.send('this is a post req');
});

app.get('*',(req,res)=>{
    res.send('cannot find path');
})

app.listen(3000, () => {
    console.log("listening on port 3000");
});

