const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
var tx = params['tx'];
var name = params['name'];

function explorer() {
    let link = "https://mumbai.polygonscan.com/tx/" + tx
    console.log(link);
    window.open(link, '_blank');
};

function card() {
    let link = "card.html?tx=" + tx + "&name=" + name
    window.open(link, '_blank');
};