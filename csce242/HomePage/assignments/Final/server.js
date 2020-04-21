const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/coffee", {useUnifiedTopology:true, useNewUrlParser:true})
    .then(() => console.log("Connected to the GOOSE"))
    .catch(err => console.log("Could not connect to the GOOSE", err));

const coffeeSchema = new mongoose.Schema({
    name:String,
    roast:String,
    price:Number,
    caffeine:String,
    rating:Number,
    condiments:[String]
})

const Coffee = mongoose.model('Coffee',coffeeSchema);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/coffee', (req,res)=>{
    getCoffees(res);
});

async function getCoffees(res) {
    const coffee = await Coffee.find();
    console.log(coffee);
    res.send(coffee);
}

app.get('/api/coffee/:id',(req,res)=> {
    getCoffee(req.params.id,res);
});

async function getCoffee(id,res) {
    const coffee = await Coffee.findOne({_id:id});
    console.log(coffee);
    res.send(coffee);
}

app.post('/api/coffee', (req,res) => {
    const result = validateCoffee(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const coffee = new Coffee({
        name:req.body.name,
        roast:req.body.roast,
        price:req.body.price,
        caffeine:req.body.caffeine,
        rating:req.body.rating,
        condiments:req.body.condiments
    });

    createCoffee(coffee,res);
});

async function createCoffee(coffee,res) {
    const result = await coffee.save();
    console.log(result);
    res.send(coffee);
}

function validateCoffee(coffee) {
    const schema = {
        name:Joi.string().min(3).required(),
        roast:Joi.string().min(4).required(),
        price:1,
        caffeine:Joi.string().min(1).max(5),
        rating:Joi.number().min(1).max(5)
    };

    return Joi.validate(coffee,schema);
}

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})