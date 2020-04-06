const express = require("express");
const app = express();

app.use(express.static("public"));

app.get('/', (req,res)=> {
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/animals', (req,res)=> {
    animals = [];
    animals[0] = {
        name:"lion",
        color: "black",
        state: "pissed",
        img:"images/angry.jpeg"
    }
    animals[1] = {
        name:"bear",
        color: "brown",
        state: "hungry",
        img:"images/bear.jpg"
    }
    animals[2] = {
        name:"seal",
        color: "white",
        state: "sleep",
        img:"images/baby seal.jpg"
    }
    res.json(animals);
})

app.listen(3000,()=> {
    console.log("listening on port 3000");
});