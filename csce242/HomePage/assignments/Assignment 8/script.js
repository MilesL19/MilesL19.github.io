let count = 0;
const randomText = [];
function cycle() {
    count++;
    if (count == 5) {
        count = 0;
    }

    let display = document.getElementById("display-paragraph");
    display.innerHTML = `${randomText[count]}`;
}

function rainbow() {
    let red = document.getElementById("red");
    let orange = document.getElementById("orange");
    let yellow = document.getElementById("yellow");
    let green = document.getElementById("green");
    let blue = document.getElementById("blue");
    let purple = document.getElementById("purple");

    red.removeAttribute("hidden");
    red.style.background = "red";
    red.style.color = "red";

    orange.removeAttribute("hidden");
    orange.style.background = "orange";
    orange.style.color = "orange";

    yellow.removeAttribute("hidden");
    yellow.style.background = "yellow";
    yellow.style.color = "yellow";

    green.removeAttribute("hidden");
    green.style.background = "green";
    green.style.color = "green";

    blue.removeAttribute("hidden");
    blue.style.background = "blue";
    blue.style.color = "blue";

    purple.removeAttribute("hidden");
    purple.style.background = "purple";
    purple.style.color = "purple";

    let image = document.getElementById("image");
    image.src = "images/gold.jpg";
}

const btnDisplay = document.getElementById("btn-Rainbow");
btnDisplay.onclick = rainbow;

window.onload = function() {
    randomText.push("Hi, welcome to wendy's!");
    randomText.push("I'm lovin' it!");
    randomText.push("We have the meats!");
    randomText.push("It's finger lickin' good!");
    randomText.push("Louisiana fast");
    this.cycle();
}
setInterval(cycle, 2000);