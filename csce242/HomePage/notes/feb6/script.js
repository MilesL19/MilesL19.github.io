function displayEmotion() {
    //gathering all three pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;

    let displayP = document.getElementById("paragraph");
    displayP.innerHTML = `${firstName} your favorite color is ${favColor} and you feel ${emotion} about it.`;
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;

/*
let price = parseFloat(document.getElementById("txt-price").value);
let tax = document.getElementById("tax-span").extContent() parsens
*/