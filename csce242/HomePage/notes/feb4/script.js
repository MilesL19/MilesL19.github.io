function ShowBoy() {
    console.log("Boy Function");
    let item1 = document.getElementById("item1");
    let item2 = document.getElementById("item2");
    let item3 = document.getElementById("item3");

    item1 = "tools";
    item2 = "trucks";
    item3 = "things";

    console.log(item1);
    console.log(item2);
    console.log(item3);
    
}

function ShowGirl() {
    console.log("Girl Function");
    let item1 = document.getElementById("item1");
    let item2 = document.getElementById("item2");
    let item3 = document.getElementById("item3");

    item1 = "pink";
    item2 = "Mulan";
    item3 = "stuff";

    console.log(item1);
    console.log(item2);
    console.log(item3);
}

function CureDepression() {
  
  if(document.getElementById("saddness").src = "images/sad.png") {
    document.getElementById("saddness").src = "images/happy.png";
  }

  if(document.getElementById("saddness").src = "images/happy.png") {
    document.getElementById("saddness").src = "images/Kirby's_cake.jpg";
  }

  if(document.getElementById("saddness").src = "images/Kirby's_cake.jpg") {
    document.getElementById("saddness").src = "images/sad.png";
  }
}


let btnBoy = document.getElementById("btn-boy");
let btnGirl = document.getElementById("btn-girl");
let btnSad = document.getElementById("btn-picture");

btnBoy.onclick = ShowBoy;
btnGirl.onclick = ShowGirl;
btnSad.onclick = CureDepression;

