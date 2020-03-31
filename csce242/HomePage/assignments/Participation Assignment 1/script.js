let brewery = [];
let count = 0;
let currBrew = document.createElement("div");
let container = document.createElement("div");
async function Brewery() {
    let response = await fetch(`https://milesl19.github.io/csce242/HomePage/json/breweries.json`);
    let breweryJSON = await response.json();
    let breweryDiv = document.getElementById("brewery-display");

    for (i in breweryJSON) {
        brewery[i] = breweryJSON[i];
    }

    //Creating and appending text-box image
    container.classList.add("container");
    let image = document.createElement("img");
    image.src = `images/text-box.png`;
    image.style.height = `400px`;
    image.style.width = `500px`; 
    container.append(image);

    //Creating and appending information to text-box image
    currBrew.append(getBreweryInfo(brewery[0]));
    currBrew.classList.add("centered");
    container.append(currBrew);

    //appending informaiton to page*/
    breweryDiv.append(container);
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
    aWeb.innerText = "Click me for the brewery's website ;)";   
    ulElem.append(aWeb);

    return brewSect;
}



function cycle() {
    count++; 
    if (count >= 20) {
        count = 0;
    }
    
    currBrew.replaceChild(getBreweryInfo(brewery[count]), currBrew.childNodes[0]);
}

window.onload = function() {
    this.Brewery();
}

setInterval(cycle,3000)