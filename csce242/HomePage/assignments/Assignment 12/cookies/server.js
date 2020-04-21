const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

let cookies = [
{id:1, name:"Sugar Cookie", shape:"Star", calories: 230, price: 1.99 }
];

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/cookies', (req,res) => {
    res.send(cookies);
});

app.get('/api/cookies/:id', (req,res) => {
    const cookie = cookies.find( r => r.id === parseInt(req.params.id));

    if(!cookie) res.status(404).send("The cookie with that id isn't here...");
    
    res.send(cookie);
});

app.post('/api/cookies', (req,res) => {
    const result = validateCookie(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const cookie = {
        id:cookies.length + 1, 
        name: req.body.name, 
        shape: req.body.shape, 
        calories: req.body.calories, 
        price: req.body.price
    };
    cookies.push(cookie);
    res.send(cookie);
});

app.put('/api/cookies/:id', (req,res) =>{
    const cookie = cookies.find( r => r.id === parseInt(req.params.id));

    if (!cookie) res.status(404).send("The cookie with that id wasn't found...");

    const result = validateCookie(req.body);

    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    cookie.name = req.body.name;
    cookie.shape = req.body.shape;
    cookie.calories = req.body.calories;
    cookie.price = req.body.price;
    res.send(cookie);
});

app.delete('/api/cookies/:id', (req,res) => {
    const cookie = cookies.find( r => r.id === parseInt(req.params.id));

    if (!cookie) {
        req.status(404).send("The cookie with that id wasn't found...");
    }

    const index = cookies.indexOf(cookie);
    cookies.splice(index,1);

    res.send(cookie);
});

function validateCookie(cookie) {
    const schema = {
        name:Joi.string().min(3).required(),
        shape:Joi.string().min(4).required(),
        calories:Joi.number().greater(0),
        price:Joi.number().greater(0)
    };

    return Joi.validate(cookie, schema);
}

app.listen(3000, () => {
    console.log("Welcome to my assignment 12! :)")
})