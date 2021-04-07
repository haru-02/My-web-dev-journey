const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');

app.set('views', path.join(__dirname, '/views'));

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/cats',(req,res)=>{
    const cats = ["blue","red","steve","cipher"];
    res.render('cats',{cats});
});

app.get('/rand', (req,res) =>{
    const num = Math.floor(Math.random()*10) + 1;
    res.render('random',{ rand : num });
});

app.get('/r/:subreddit', (req,res)=>{
    const {subreddit} = req.params;
    res.render('subreddit',{subreddit : subreddit});
});

app.listen(3000,()=>{
    console.log("listening on port 3000");
});
