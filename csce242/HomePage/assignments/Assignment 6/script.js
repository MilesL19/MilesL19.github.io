function ageCompare() {
    const nameOne = document.getElementById("name-one").value;
    const nameTwo = document.getElementById("name-two").value;
    const nameThree = document.getElementById("name-three").value;

    const ageOne = document.getElementById("age-one").value;
    const ageTwo = document.getElementById("age-two").value;
    const ageThree = document.getElementById("age-three").value;

    let displayP = document.getElementById("paragraph");
    if (ageOne > ageTwo && ageOne > ageThree) {
        if (ageTwo > ageThree) {
            displayP.innerHTML = `${nameOne} is ${ageOne} years old, and is older than ${nameTwo} who is ${ageTwo} years old, and is older than ${nameThree} who is ${ageThree}`;
        }else {
            displayP.innerHTML = `${nameOne} is ${ageOne} years old, and is older than ${nameThree} who is ${ageThree} years old, and is older than ${nameTwo} who is ${ageTwo}`;
        }
    } else if (ageTwo > ageOne && ageTwo > ageThree) {
        if (ageOne > ageThree) {
            displayP.innerHTML = `${nameTwo} is ${ageTwo} years old, and is older than ${nameOne} who is ${ageOne} years old, and is older than ${nameThree} who is ${ageThree}`;
        }
        displayP.innerHTML = `${nameTwo} is ${ageTwo} years old, and is older than ${nameThree} who is ${ageThree} years old, and is older than ${nameOne} who is ${nameOne}`;
    }
}
function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

function displayData() {
    let fundAmount = document.getElementById("funds").value;
    var gradChange = document.getElementById("grad").value;
    
    if (fundAmount <= 2500) {
        gradChange.style.background = 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%)';
    } else if (fundAmount <= 5000 ) {
        gradChange.style.background = 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)';
    } else if (fundAmount <= 7500 ) {
        gradChange.style.background = 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 75%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 100%)';
    } else {
        gradChange.style.background = 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%)';
    }
}


const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;

const btnAge = document.getElementById("btn-compare");
btnAge.onclick = ageCompare;

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayData;