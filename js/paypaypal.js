const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let name = params['name'];

const namehtml = document.getElementById('name');


let text = "Confirm your name: " + name;
namehtml.textContent = text;

function checkout() {
    console.log("Checkout");
};