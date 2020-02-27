let color = "red";
function ArrayDisplay() {
    const toys = ["drum","ball", "car", "bicicletas"];
    var arrayLength = toys.length;
    let finish = document.getElementById("toy-result");
    finish.innerHTML = "";
    let ulElem = document.createElement("ul");
    finish.append(ulElem);
    
    //looping to display array information
    for (let i = 0; i < arrayLength; i++) {
        let liElem = document.createElement("li");
        liElem.textContent = toys[i];
        ulElem.append(liElem);

        if (i % 2) {
            liElem.classList.add("highlight");
        }
    }
}

function toggleToys() {
    let toysResult = document.getElementById("toy-result");
    
    if (color == "red") {
        color == "green";
    } else if (color == "green") {
        color == "red";
    }

    toysResult.classList.toggle("hidden");
    toysResult.style.backgroundColor = color;

}

//const btnDisplay = document.getElementById("btn-Display");
//btnDisplay.onClick = ArrayDisplay;
setInterval(ArrayDisplay, 1000);