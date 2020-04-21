async function displayCookies() {
    let response = await fetch('api/cookies/');
    let cookiesJSON = await response.json();
    let cookieDiv = document.getElementById("cookies-list");
    cookieDiv.innerHTML = "";

    for (i in cookiesJSON) {
        let cookie = cookiesJSON[i];
        cookieDiv.append(getCookieItem(cookie));
    }
}

function getCookieItem(cookie) {
    let cookieSection = document.createElement("section");
    cookieSection.classList.add("cookie-block");

    let title = document.createElement("a");
    title.setAttribute("data-id",cookie.id);
    title.href = "#";
    title.onclick = showCookieDetails;

    let h2Elem = document.createElement("h2");
    h2Elem.textContent = cookie.name;
    title.append(h2Elem);
    cookieSection.append(title);
    
    return cookieSection;
}

async function showCookieDetails() {
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/cookies/${id}`);

    if (response.status != 200) {
        console.log("Error locating cookie...");
        return;
    }

    let cookie = await response.json();
    document.getElementById("cookie-id").textContent = cookie.id;
    document.getElementById("txt-name").value = cookie.name;
    document.getElementById("txt-shape").value = cookie.shape;
    document.getElementById("txt-calories").value = cookie.calories;
    document.getElementById("txt-price").value = cookie.price;
}

async function addCookie() {
    let cookieName = document.getElementById("txt-add-name").value;
    let cookieShape = document.getElementById("txt-add-shape").value;
    let cookieCal = document.getElementById("txt-add-calories").value;
    let cookiePrice = document.getElementById("txt-add-price").value;
    let message = document.getElementById("result-message");
    let div = document.getElementById("message");

    let cookie = {"name":cookieName, "shape":cookieShape, "calories":cookieCal, "price":cookiePrice};

    let response = await fetch('/api/cookies',{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(cookie),
    });

    if(response.status != 200) {
        console.log("ERROR POSTING DATA");

        //making the message appear
        div.classList.remove("hidden");
        message.textContent = "This cookie was not added succesfully...";
        
        //fading the message
        setTimeout(function() {div.classList.add("hidden")}, 3000);
        return;
    }

    let result = await response.json();
    console.log(result);

    //making the message appear
    div.classList.remove("hidden");
    message.textContent = "The cookie was baked successfully!"

    //fading the message
    setTimeout(function() {div.classList.add("hidden")}, 3000);

    displayCookies();
}

async function editCookie() {
    let id = document.getElementById("cookie-id").textContent;

    let cookieName = document.getElementById("txt-name").value;
    let cookieShape = document.getElementById("txt-shape").value;
    let cookieCal = document.getElementById("txt-calories").value;
    let cookiePrice = document.getElementById("txt-price").value;
    let message = document.getElementById("result-message");
    let div = document.getElementById("message");

    
    let cookie = {"name":cookieName, "shape":cookieShape, "calories":cookieCal, "price":cookiePrice};

    let response = await fetch(`/api/cookies/${id}`, {
        method:"PUT",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(cookie)
    });

    if(response.status != 200) {
        console.log("error updating cookie");
        //making the message appear
        div.classList.remove("hidden");
        message.textContent = "This cookie was not re-baked succesfully...";
        
        //fading the message
        setTimeout(function() {div.classList.add("hidden")}, 3000);
        return;
    }

    //making the message appear
    div.classList.remove("hidden");
    message.textContent = "This cookie was re-baked succesfully!";
    
    //fading the message
    setTimeout(function() {div.classList.add("hidden")}, 3000);
    let result = await response.json();
    displayCookies();
}

async function deleteCookie() {
    let id = document.getElementById("cookie-id").textContent; 
    let message = document.getElementById("result-message");
    let div = document.getElementById("message");

    let response = await fetch(`/api/cookies/${id}`, {
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        }
    });

    if (response.status != 200) {
        console.log("Error deleting");
         //making the message appear
         div.classList.remove("hidden");
         message.textContent = "This cookie could not be sold!";
         
         //fading the message
         setTimeout(function() {div.classList.add("hidden")}, 3000);
        return;
    }

    //making the message appear
    div.classList.remove("hidden");
    message.textContent = "This cookie was sold succesfully!";
    
    //fading the message
    setTimeout(function() {div.classList.add("hidden")}, 3000);

    let result = await response.json();
    displayCookies();
}

window.onload = function(){
    this.displayCookies();

    let addBtn = document.getElementById("btn-add-cookie");
    addBtn.onclick = addCookie;

    let editBtn = document.getElementById("btn-edit-cookie");
    editBtn.onclick = editCookie;

    let deleteBtn = document.getElementById("btn-delete-cookie");
    deleteBtn.onclick = deleteCookie;
}