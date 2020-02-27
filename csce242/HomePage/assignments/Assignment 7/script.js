let margin = 0;
let grow = 0;
function Walking() {
    margin += 10;
    document.getElementById("picture").style.setProperty('--dim', margin + "px");
}

function fillGradient() {
    let number = document.getElementById("txt-funds").value * 100;
    grow = number/10000
    document.getElementById("grad").style.setProperty('--blank', grow + "%");


}

const btnWalk = document.getElementById("picture");
btnWalk.onclick = Walking;

const btnDisplay = document.getElementById("display");
btnDisplay.onclick = fillGradient;