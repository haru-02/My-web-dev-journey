const express = require('express');
const app = express();
const path = require('path');
const Product = require('./models/product');
const methodOverride = require('method-override')
const mongoose = require('mongoose');
const { findById } = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser :true, useUnifiedTopology: true})
.then(()=>{
    console.log('connected to database!');
})
.catch(e =>{
    console.log('error in database');
    console.log(e);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));

categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req,res)=>{
    const {category} = req.query;
    if(category){
        const products = await Product.find({category});
        res.render('products/index', {products, category});
    }else{
        const products = await Product.find({});
        res.render('products/index', {products, category: 'all'});
    }
});

app.get('/products/new', (req,res) =>{
    res.render('products/new')
});

app.get('/products/:id/edit', async (req,res) =>{
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    res.render('products/edit',{foundProduct, categories});
});

app.get('/products/:id', async (req,res)=>{
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    res.render('products/show',{foundProduct});
});

app.delete('/products/:id', async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
});

app.put('/products/:id', async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true});
    res.redirect(`/products/${product._id}`);
});

app.post('/products', async (req,res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
});

app.listen(3000, ()=>{
    console.log('on port 3000');
});