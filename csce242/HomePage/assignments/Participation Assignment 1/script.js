let brewery;
async function Brewery() {
    let response = await fetch(`https://milesl19.github.io/csce242/HomePage/json/breweries.json`);
    let breweryJSON = await response.json();
    let breweryDiv = document.getElementById("brewery");
    let count = 0;

    for (i in breweryJSON) {
        brewery = breweryJSON[i];
    }
    
    //Creating the container for the info to be displayed in
    let container = document.createElement("div");

    //Creating a brewery object to hold current brewery and image to place info in 
    let currBrew = document.createElement("section");
    container.classList.add("container");
    let image = document.createElement("img");
    image.src = `images/text-box.png`;
    image.style.height = `400px`;
    image.style.width = `500px`;
    image.classList.add("container");
    container.append(image);

    
    container.append(currBrew);
    currBrew.classList.add("container");
    currBrew.classList.add("center");
    currBrew.append(getBreweryInfo(brewery));
    
    breweryDiv.append(container);
    /*while (count != brewery.length) {
        breweryDiv.append(brewery[count]);
    }*/

}

function getBreweryInfo(brewery) {
    //Getting information 
    let brewSect = document.createElement("section");

    let ulElem = document.createElement("ul");
    ulElem.innerText = `Information:`;
    brewSect.append(ulElem);

    let liName = document.createElement("li");
    liName.innerText = `Name: ${brewery.name}`;
    ulElem.append(liName);

    let liType = document.createElement("li");
    liType.innerText = `This is a ${brewery.brewery_type}`;
    ulElem.append(liType);

    let liAddress = document.createElement("li")
    liAddress.innerText = 
    `Address: ${brewery.city}, ${brewery.state} 
    ${brewery.postal_code} ${brewery.country}`;
    ulElem.append(liAddress);

    let aWeb = document.createElement("a");
    aWeb.href = brewery.website_url;
    aWeb.innerText = "Click me for the website ;)";   
    ulElem.append(aWeb);

    return brewSect;
}

/*function appendDiv(div, brewery) {
    let container = document.createElement("div");
    let overlay = document.createElement("div");

    overlay.classList.add("overlay");
    container.classList.add("container");
    let image = document.createElement("img");
    image.src = `images/text-box.png`;
    container.append(image);
    overlay.append(getBreweryInfo(brewery));
    container.append(overlay);
    div.append(container);

}*/

window.onload = function() {
    this.Brewery();

}