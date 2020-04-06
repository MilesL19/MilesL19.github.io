

async function getAnimals() {
    let response = await fetch("http://localhost:3000/api/animals");
    let animalsJSON = await response.json();
    let animalsDiv  = document.getElementById("animal-list");

    for (i in animalsJSON) {
        let animal = animalsJSON[i];
        animalsDiv.append(getAnimalItem(animal));
    }
}

function getAnimalItem(animal) {
    let animalSection = document.createElement("section");
    
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = animal.name;
    animalSection.append(h3Elem);

    let colorP = document.createElement("p");
    colorP.textContent = `Color ${animal.color}`;
    animalSection.append(colorP);

    let stateP = document.createElement("p");
    stateP.textContent = `State ${animal.state}`;
    animalSection.append(stateP);

    let image = document.createElement("img");
    image.src = "http://localhost:3000/" + animal.img;
    animalSection.append(image);
    return animalSection;
}

window.onload = function() {
    getAnimals();
}