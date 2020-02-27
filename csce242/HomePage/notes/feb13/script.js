function displayEmotion() {
    //gather all 3 pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    
    let displayP = document.getElementById("ex1-result");
    let displayEmotion = document.getElementById("ex1-emotion");

    //clear all errors before

    //validate data
    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-fav-color");
    const thirdError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thirdError) return;

    //display results
    displayP.innerHTML = `Welcome ${firstName}!<br>You are ${emotion} today`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.remove("red", "green", "yellow", "blue");
    displayEmotion.classList.add(favColor.toLowerCase());
}

function isBlank(data, errorSpanId){
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function getEmoji(emotion){
    const emoCI = emotion.toLowerCase();

    if(emoCI == "happy")
    {
        return ":)"
    }
    else if(emoCI == "sad"){
        return ":(";
    }
    else if(emoCI == "silly"){
        return ":p";
    }
    else if(emoCI == "angry"){
        return ">:|";
    }

    return "";
}

function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

function isNotValidNum(data, errorSpanId){
    if(isNaN(data)) {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function counting() {
   // let results = document.getElementById("ex2-result");
    let startNum = parseInt(document.getElementById("txt-start")).value;
    let endNum = parseInt(document.getElementById("txt-end")).value;

    //clearing both error spans

    /* if either input is blank 
    if (isNotValidNum(startNum, "error-start") | isNotValidNum(endNum, "error-end")) {
        return;
    }


    // if end num <= start num kill yourself
    if (startNum >= endNum) {
        results.innerHTML = `Nope`;
        return;
    }*/

    /*
    results.innerHTML = "Counting!! <ul>";

    for (let i = startNum; i <= endNum; i++) {
        results.innerHTML += `<li>${i}</li>`;
    }

    results.innerHTML = "<ul>Done!";*/

    let h3Elem = document.createElement("h3")
    h3Elem.textContent = "Counting:";
    btnThirdDisplay.after(h3Elem);

    let ulElem = document.createElement("ul");
    btnThirdDisplay.after(ulElem);

    for (let i =startNum; i <= endNum; i++) {
        let liElem = document.createElement("li");
        liElem.textContent = i;
        ulElem.append(liElem);
    }
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;

const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;

const btnThirdDisplay = document.getElementById("btn-text-display");
btnThirdDisplay.onclick = counting;