const express = require('express');
const methodoverride = require('method-override')
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodoverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

let comments = [

    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol this is so funny',
    },

    {
        id: uuid(),
        username: 'janet',
        comment: 'omg i love this picture',
    },

    {
        id: uuid(),
        username: 'jake',
        comment: 'life is pointless and existence is pain',
    },

    {
        id: uuid(),
        username: 'cheems',
        comment: 'noo programming harmd',
    },

];

app.get('/comments', (req,res)=>{
    res.render('comments/index', {comments});
});


app.post('/comments', (req,res)=>{
    const {username, comment} = req.body;
    comments.push( { username, comment, id: uuid() } );
    res.redirect('/comments');
});

app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
});

app.get('/comments/:id',(req,res)=>{
    const{ id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show',{comment});
});

app.get('/comments/:id/edit',(req,res)=>{
    const{ id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit',{comment});
});

app.patch('/comments/:id',(req,res)=>{
    const { id } = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
});

app.delete('/comments/:id',(req,res)=>{
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
});

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});