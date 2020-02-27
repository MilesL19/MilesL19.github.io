let margin = 0;
function Walking() {
    margin += 10;

    if (document.getElementById("picture").src = "images/walking-one.png") {
      
        document.getElementById("picture").src = "images/walking-two.png";

    } else if (document.getElementById("picture").src = "images/walking-two.png") {
        
        document.getElementById("picture").src = "images/walking-one.png";
        
    }

    document.getElementById("picture").style.setProperty('--dim', margin + "px");
}

const btnWalk = document.getElementById("picture");
btnWalk.onclick = Walking;