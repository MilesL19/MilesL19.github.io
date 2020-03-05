function generateTableHead(table,data) {
   let thead = table.createTHead();
   let row = thead.insertRow();

    for (let key of data) {
        let th = document.createElement("th");
        th.style.background = "#33A9FF";
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
    
}

function populateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        row.style.borderStyle = "1px solid black";
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

class Person {
    constructor (firstName, lastName, stuff) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.stuff = stuff;
    }
}

window.onload = function() {
    let head = ["name", "last name", "notes", "i'm not sure tbh"];
    let person = [];
    person.push(new Person("Miles", "Littlejohn", "These are notes"));
    person.push(new Person("Jasy", "Littlejohn", "FORESHADOWING"));
    person.push(new Person("The Spanish", "Inquisition", "THE SPANISH INQUISITION"));
    person.push(new Person("Tierra", "Whack", "BET"));
    
    
    let table = document.getElementById("Table");
    generateTableHead(table, head);
    populateTable(table, person);
}
