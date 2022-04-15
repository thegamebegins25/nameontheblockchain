const name = document.getElementById('name');
const tx = document.getElementById('tx');

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let txtext = params['tx'];
let nametext = params['name'];
console.log(txtext);
console.log(nametext);

name.textContent = "My name is: " + nametext;
tx.textContent = 'Transaction Hash: "' + txtext + '"'

let link = "https://mumbai.polygonscan.com/tx/" + txtext
new QRCode(document.getElementById("qrcode"), {
	text: link,
});

window.print()