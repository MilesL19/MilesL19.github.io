class Dog {
    constructor(title, breed, color, age, size, picture) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.picture = picture;
    }

    get details() {
        return `${this.title} is a ${this.breed}`;
    }

    get item() {
        let dogSection = document.createElement("section");
        let infoSection = document.createElement("section");
       //create title

       //creating picture or something
       let pic = document.createElement("img");
       pic.src =`${this.picture}`;
       dogSection.append(pic);
       

       //create list
       let ulElem = document.createElement("ul");
       dogSection.append(ulElem);

       let liName = document.createElement("li");
       liName.innerText = `Name: ${this.title}`;
       ulElem.append(liName);
       
       let liBreedElem = document.createElement("li");
       liBreedElem.innerText = `Breed: ${this.breed}`;
       ulElem.append(liBreedElem);

       let liColorElem = document.createElement("li");
       liColorElem.innerText = `Color: ${this.color}`;
       ulElem.append(liColorElem);

       let liAgeElem = document.createElement("li");
       liAgeElem.innerText = `Age: ${this.age}`;
       ulElem.append(liAgeElem);

       let liSizeElem = document.createElement("li");
       liSizeElem.innerText = `Size: ${this.size}`;
       ulElem.append(liSizeElem);

       return dogSection;
    }
}

// After the DOM has been loaded
// After all the HTML elements have been rendered

window.onload = function() {
    let dog = [];
    dog.push(new Dog("Kirby", "Corgi", "Caramel", 2, "Small but a fatass", "images/Corgi-Husky.png"));
    dog.push(new Dog("Goofy", "Golden Retriever", "Golden", 3, "Bigger and a fatass", "images/golden-boi.jpg"));
    dog.push(new Dog("Eiha", "Shiba Inu", "Black and white", 2, "Smaller than Goofy but bigger than Kirby and still a fatass", "images/dylan11.jpg"));
    let display = document.getElementById("dog-list");


    display.append(dog[0].item);
    display.append(dog[1].item);
    display.append(dog[2].item);
}