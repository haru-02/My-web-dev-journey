const Product = require('./models/product');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser :true, useUnifiedTopology: true})
.then(()=>{
    console.log('connected to database!');
})
.catch(e =>{
    console.log('error in database');
    console.log(e);
});


const seedProducts = [
    
    {
        name: 'grapefruit',
        price: 1.99,
        category: 'fruit',
    },
    {
        name: 'fairy eggplant',
        price: 1.00,
        category: 'vegetable',
    },
    {
        name: 'organic goodness melon',
        price: 4.99,
        category: 'fruit',
    },
    {
        name: 'organic mini seedless watermelon',
        price: 3.99,
        category: 'fruit',
    },
    {
        name: 'organic goodness melon',
        price: 4.99,
        category: 'fruit',
    },
    {
        name: 'organic celery',
        price: 1.50,
        category: 'vegetable',
    },
    {
        name: 'chocolate whole milk',
        price: 2.69,
        category: 'dairy',
    },
];

Product.insertMany(seedProducts)
    .then( res =>{
        console.log(res);
    })
    .catch(e =>{
        console.log(e);
    });

    
// const p = new Product({
//     name: 'grapefruit',
//     price: 1.99,
//     category: 'fruit',
// });

// p.save()
//     .then(()=>{
//         console.log(p);
//     })
//     .catch(e=>{
//         console.log('error saving to database');
//         console.log(e);
//     });
