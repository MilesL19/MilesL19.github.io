async function getGames() {
    let response = await fetch("http://localhost:3000/api/games");
    let gamesJSON = await response.json();
    let gDiv  = document.getElementById("game-list");

    for (i in gamesJSON) {
        let game = gamesJSON[i];
        gDiv.append(getGameItem(game));
    }
}

function getGameItem(game) {
    let gameSection = document.createElement("section");
    gameSection.classList.add("game-block");
    
    let imageSection = document.createElement("section");;
    let image = document.createElement("img");
    image.src = `${game.img}`;
    imageSection.append(image);
    gameSection.append(imageSection);

    let ulElem = document.createElement("ul");

    let nameEle = document.createElement("li");
    nameEle.innerText = `Name: ${game.name}`;
    ulElem.append(nameEle);
    
    let playersEle = document.createElement("li");
    playersEle.innerText = `\nNumber of players: ${game.players}`;
    ulElem.append(playersEle);
    
    let genreEle = document.createElement("li");
    genreEle.innerText = `\nGenre: ${game.genre}`;
    ulElem.append(genreEle);
    
    let priceEle = document.createElement("li");
    priceEle.innerText = `\nPrice: $${game.price}`;
    ulElem.append(priceEle);

    let arrEle = document.createElement("li");
    arrEle.innerText = `\nReviews: \n${game.reviews.join("  \n  ")}`
    ulElem.append(arrEle);

    let sysEle = document.createElement("li");
    sysEle.innerText = `\nSystem: ${game.system}`;
    ulElem.append(sysEle);

    
    gameSection.append(ulElem);
    return gameSection;
}

window.onload = function() {
    getGames();
}