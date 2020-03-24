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
        let toySection = document.createElement("section");
        toySection.classList.add("text");
        
        //Getting the information
        let ulElem = document.createElement("ul");
        ulElem.classList.add("text");
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

    get getImageSRC() {
        let pic = document.createElement("img");
        pic.src =`images/${this.image}`;
        return pic;
    }
}
        
window.onload = function() {
    let store = [];
    store.push( new Toy("Kirby", 8.99, "5-10", 5, "kirby.jpg"));
    store.push( new Toy("Heartless", 6.99, "10", 3, "heartless.jpg"));
    store.push( new Toy("Luigi", 2.99, "2", 2, "baby-luigi.jpg"));
    store.push( new Toy("Link", 4.99, "4", 4, "link.jpg"));
    store.push( new Toy("Monokuma", 1.99, "1", 1, "monokuma.jpg"));
    store.push( new Toy("White Pikmin", 5.99, "5", 5, "white pikmin.jpg"));

    let display = document.getElementById("image");
    let info = document.getElementById("information");

    for (let i in store) {
        display.append(store[i].getImageSRC);
        info.append(store[i].getToyItem);
    }

    
}