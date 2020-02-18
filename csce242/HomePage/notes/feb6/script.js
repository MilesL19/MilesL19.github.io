function displayEmotion() {
    //gathering all three pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;

    let displayP = document.getElementById("paragraph");
    let displayEmotion = document.getElementById("exl-emotion");

    //clear all errors before


    //validate data
    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-fav-color");
    const thirdError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thirdError){
        return; 
    } 

    //display results
    displayP.innerHTML = `${firstName} your favorite color is ${favColor} and you feel ${emotion} about it`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.remove("red", "green", "blue", "yellow");
    displayEmotion.classList.add(favColor.toLowerCase());
}

function displayMusic() {
    //Gathering data
    const artistName = document.getElementById("txt-artist").value;
    const songName = document.getElementById("txt-song").value;

    //Getting the display area ready
    let displayArtist = document.getElementById("artist-paragraph");

    //validating data
    const firstError = isBlank(artistName, "error-artist");
    const secondError = isBlank(songName, "error-song");

    if (firstError || secondError) {
        return;
    }

    //Displaying results
    displayArtist.innerHTML = `${songName} by: ${artistName}`; 
}

function isBlank(data, errorSpanId) {
    if (data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function getEmoji (emotion) {
    const emoCI = emotion.toLowerCase();

    if (emoCI == "happy") {
        return ":)"
    } else if (emoCI == "sad") {
        return ":("
    } else if (emoCI == "silly") {
       return ":P"
    } else if (emoCI == "angry") {
       return ">:("
    }

    return "";
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;

const btnDisplayArtist = document.getElementById("btn-display-artist");
btnDisplayArtist.onclick = displayMusic;

/*
let price = parseFloat(document.getElementById("txt-price").value);
let tax = document.getElementById("tax-span").extContent() parsens
*/