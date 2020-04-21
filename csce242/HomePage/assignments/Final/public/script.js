async function displayCoffee(){
    let response = await fetch('api/coffee/');
    let coffeeJSON = await response.json();
    let coffeeDiv = document.getElementById("coffee-list");
    coffeeDiv.innerHTML = "";

    for(i in coffeeJSON){
        let coffee = coffeeJSON[i];
        coffeeDiv.append(getCoffeeItem(coffee));
    }
}

function getCoffeeItem(coffee){
    let coffeeSection = document.createElement("section");
    coffeeSection.classList.add("coffee");

    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", coffee._id);
    aTitle.href = "#";
    aTitle.onclick = showCoffeeDetails;
    
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = `${coffee.name}: ${coffee.roast} roast`;
    aTitle.append(h3Elem);
    coffeeSection.append(aTitle);

    let editButton = document.createElement("button");
    editButton.textContent = "Re-brew";
    editButton.onclick = toggleEditForm;
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Sell";

    coffeeSection.append(editButton);
    coffeeSection.append(deleteButton);
    return coffeeSection;
}

async function showCoffeeDetails() {
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/coffee/${id}`);

    if (response.status != 200) {
        //displaying message error
        console.log("Error receiving coffee");
        return;
    }

    let coffee = await response.json();
    let message = document.getElementById("result-message");
    let div = document.getElementById("message");
    div.classList.remove("hidden");

    let ulElem = document.createElement("ul");
    message.append(ulElem);

    let liRate = document.createElement("li");
    liRate.innerText = `Rating: ${coffee.rating}`;
    ulElem.append(liRate);

    let liPrice = document.createElement("li");
    liPrice.innerText = `Price: $${coffee.price}`;
    ulElem.append(liPrice);

    let liCaffeine = document.createElement("li");
    liCaffeine.innerText = `Caffeine: ${coffee.caffeine}`;
    ulElem.append(liCaffeine);

    let liCondiments = document.createElement("li");
    liCondiments.innerText = `Add-ons: ${coffee.condiments[0]}, ${coffee.condiments[1]}`;
    ulElem.append(liCondiments);
    
    
}

function toggleAddForm() {
    let form = document.getElementById("add-form");
    form.classList.remove("hidden");
}

function toggleEditForm() {
    let form = document.getElementById("edit-form");
    form.classList.remove("hidden");
}

async function addCoffee() {
    let coffeeName = document.getElementById("txt-name").value;
    let coffeeRoast = document.getElementById("txt-roast").value;
    let coffeePrice = document.getElementById("txt-price").value;
    let coffeeCaffeine = document.getElementById("txt-caffeine").value;
    let coffeeRating = document.getElementById("txt-rating").value;
    let form = document.getElementById("add-form");
    let createBtn = document.getElementById("btn-create-coffee");

    var condiments = ["Whipped Cream", "Milk", "Sugar", "Cinnamon Spice"];
    form.classList.remove("hidden");

    //hide form
    createBtn.onclick = form.classList.add("hidden");

    let coffee = {"name":coffeeName, "roast":coffeeRoast, "price":coffeePrice, "caffeine":coffeeCaffeine, "rating":coffeeRating, "condiments:":condiments};

    let response = await fetch('/api/coffee', {
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(coffee),
    });

    if(response.status != 200) {
        console.log("ERROR ADDING COFFEEE");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayCoffee();

}

window.onload = function() {
    this.displayCoffee();

    let addBtn = document.getElementById("btn-add");
    addBtn.onclick = toggleAddForm;
}

/*
async function addRecipe() { 
    let recipeName = document.getElementById("txt-add-name").value;
    let recipeDescription = document.getElementById("txt-add-description").value;

    let recipe = {"name":recipeName, "description": recipeDescription};
    
    let response = await fetch('/api/recipes',{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(recipe),
    });

    if(response.status != 200){
        console.log("ERROR posting data");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayCoffee();
}

async function editRecipe() {
    let recipeId = document.getElementById("recipe-id").textContent;
    let recipeName = document.getElementById("txt-name").value;
    let recipeDescription = document.getElementById("txt-description").value;
    let recipe = {"name":recipeName, "description": recipeDescription};

    let response = await fetch(`/api/recipes/${recipeId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body: JSON.stringify(recipe)
    });

    if(response.status != 200){
        console.log("Error updating recipe");
        return;
    }

    let result = await response.json();
    displayCoffee();
}

async function deleteRecipe() {
    let recipeId = document.getElementById("recipe-id").textContent;

    let response = await fetch(`/api/recipes/${recipeId}`, {
        method:"DELETE",
        headers: {
            'Content-Type':'application/json;charset=utf-8',
        }
    });

    if (response.status != 200) {
        console.log("Error deleting");
        return;
    }

    let result = await response.json();
    displayCoffee();
}

window.onload = function(){
    this.displayCoffee();

    let addBtn = document.getElementById("btn-add-recipe");
    addBtn.onclick = addRecipe;

    let editBtn = document.getElementById("btn-edit-recipe");
    editBtn.onclick = editRecipe;

    let deleteBtn = document.getElementById("btn-delete-recipe");
    deleteBtn.onclick = deleteRecipe;
} */