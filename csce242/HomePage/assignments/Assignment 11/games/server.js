const express = require("express");
const app = express();

app.use(express.static("public"));

app.get('/', (req,res)=> {
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/games', (req,res)=> {
    games = [];
    games[0] = {
        name:"The World Ends With you",
        players: 1,
        genre: "Action-Adventure RPG",
        price: 29.99,
        reviews: ["10/10 BEST GAME ", "LOVE IT ", "THE SOUNDTRACK IS PHENOMENAL"],
        system: "Nintendo DS",
        img:"images/twewy.jpg"
    }
    games[1] = {
        name:"Kingdom Hearts",
        players: 1,
        genre: "Action-Adventure RPG",
        price: 39.99,
        reviews: ["7.8/10", "Is there a way to mute Donald? ", "MY FRIENDS ARE MY POWER lol "],
        system: "Playstation 2",
        img:"images/Kindgom_hearts.jpg"
    }
    games[2] = {
        name:"Mario and Luigi Partners In Time",
        players: 1,
        genre: "Turn-Based RPG",
        price: 19.99,
        reviews: ["7.5/10 ", "Not a lot of use for the touch screen... ", "Baby luigi is so cute!!!"],
        system: "Nintendo DS",
        img:"images/partners.jpg"
    }
    games[3] = {
        name:"Kirby and the Amazing Mirror",
        players: 4,
        genre: "Adventure",
        price: 10.99,
        reviews: ["7/10 ", "It shines with 4 players ", "Real Fun"],
        system: "Gameboy",
        img:"images/kirby.jpg"
    }
    games[4] = {
        name:"Final Fantasy 13",
        players: 1,
        genre: "Action-Adventure RPG",
        price: 49.99,
        reviews: ["6.5/10 ", "Too many hallways ", "Come on guys the game isn't that bad..."],
        system: "Xbox 360, Playstation 3",
        img:"images/lightning.jpg"
    }
    games[5] = {
        name:"ilomilo",
        players: 2,
        genre: "Puzzle-Platformer",
        price: 10.99,
        reviews: ["8/10 ", "Pretty good game! ", "Whoa I didn't know Billie Eilish made a game?!"],
        system: "Xbox 360",
        img:"images/ilomilo.png"
    }
    res.json(games);
})

app.listen(3000,()=> {
    console.log("Hi welcome to my video assignment! :)");
});