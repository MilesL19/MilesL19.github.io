function displayInformation() {

    const firstName = document.getElementById("txt-first-name").value;
    const lastName = document.getElementById("txt-last-name").value;
    const productName = document.getElementById("txt-product-name").value;
    const productCount = document.getElementById("txt-product-count").value;
    const productPrice = (document.getElementById("txt-product-price").value * productCount) + ((document.getElementById("txt-product-price").value * productCount) *.07);


    let displayP = document.getElementById("paragraph");
    displayP.innerHTML = `${firstName} ${lastName} ordered ${productCount} ${productName}(s) Totalling $${productPrice}`;
}

const btnCalculate = document.getElementById("btn-calculate");
btnCalculate.onclick = displayInformation;
