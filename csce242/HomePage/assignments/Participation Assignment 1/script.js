let brewery;
async function Brewery() {
    let response = await fetch(`https://api.openbrewerydb.org/breweries`);
    let breweryJSON = await response.json();
    let breweryDiv = document.getElementById("brewery");

    for (i in breweryJSON) {
        brewery = breweryJSON[i];
        breweryDiv.append(getBreweryInfo(brewery));
    }
}

function getBreweryInfo(brewery) {
    //Getting information and appending it to image
    let brewSect = document.createElement("section");

    let ulElem = document.createElement("ul");
    ulElem.innerText = `Information:`;
    brewSect.append(ulElem);

    let liName = document.createElement("li");
    liName.innertext = `Name: ${brewery.name}`;
    ulElem.append(liName);

    let liType = document.createElement("li");
    liType.innertext = `This is a ${brewery.brewery_type}`;
    ulElem.append(liType);

    let liAddress = document.createElement("li")
    liAddress.innertext = 
    `Address: ${brewery.city}, ${brewery.state} 
    ${brewery.postal_code} ${brewery.country}`;
    ulElem.append(liAddress);

    let liUrl = document.createElement("li");
    let aWeb = document.createElement("a");
    aWeb.href = "#";
    liUrl.append(aWeb);
    liUrl.innertext = "Click me for website ;)";
    ulElem.append(liUrl);

    return brewSect;
}

function appendDiv(div, brewery) {
    div.append(getBreweryInfo(brewery));
}

window.onload = function() {
    this.Brewery();
}