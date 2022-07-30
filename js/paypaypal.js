const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
window.name = params['name'];

const namehtml = document.getElementById('name');


let text = "Confirm your name: " + window.name;
namehtml.textContent = text;