class Toy {
    constructor (name, price, ageRange, rating, image) {
        this.name = name;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.image = image;
    }

    get details() {
        return `${this.name} ${this.price} ${this.ageRange} ${this.rating}`;
    }

    get getToyItem () {
        //Creating a title

        let toySection = document.createElement("section");
        toySection.classList.add("toys");

        //Creating the section for the toy's information
        let toyInfoSection = document.createElement("section");
        toyInfoSection.classList.add("toys:hover");

        //Creating the toy pic
        let pic = document.createElement("img");
        pic.src =`images/${this.image}`;
        toySection.append(pic);

        //Getting the information
        let ulElem = document.createElement("ul");
        toyInfoSection.append(ulElem);

        //Toy's name
        let liName = document.createElement("li");
        liName.innerText = `${this.name}`;
        ulElem.append(liName);

        //Toy's price
        let liPrice = document.createElement("li");
        liPrice.innerText = `Price: $${this.price}`;
        ulElem.append(liPrice);

        //Toy's age range
        let liRange = document.createElement("li");
        liRange.innerText = `Age Range: ${this.ageRange}`;
        ulElem.append(liRange);

        //Toy's rating
        let liRating = document.createElement("li");
        liRating.innerText = `Rating: ${this.rating} stars`;
        ulElem.append(liRating);
        
        toySection.append(toyInfoSection);
        return toySection;
    }
}

window.onload() = function() {
    let store = [];
    store.push( new Toy("Kirby", 8.99, "5-10", 5, "kirby.jpg"));

    let display = document.getElementById("toy-list");
    for (let i in store) {
        display.append(store[i].getToyItem);
    }
}

let toySection = document.createElement("section");
        toySection.classList.add("text");

        //Creating the toy pic
        let pic = document.createElement("img");
        pic.src =`images/${this.image}`;
        toySection.append(pic);

        //Getting the information
        let ulElem = document.createElement("ul");
        toySection.append(ulElem);

        //Toy's name
        let liName = document.createElement("li");
        liName.innerText = `${this.name}`;
        ulElem.append(liName);

        //Toy's price
        let liPrice = document.createElement("li");
        liPrice.innerText = `Price: $${this.price}`;
        ulElem.append(liPrice);

        //Toy's age range
        let liRange = document.createElement("li");
        liRange.innerText = `Age Range: ${this.ageRange}`;
        ulElem.append(liRange);

        //Toy's rating
        let liRating = document.createElement("li");
        liRating.innerText = `Rating: ${this.rating} stars`;
        ulElem.append(liRating);
        return toySection;
    }
}

// After the DOM has been loaded
// After all the HTML elements have been rendered
