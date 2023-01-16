//Sending Ethereum to an address
function metamask() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    let name = params['name'];

    if(typeof name === 'undefined') {
        alert('Name is undefined. Please go to the home page and enter a name.');
      }

    let link = "paymetamask.html?name=" + name
    window.open(link);
};

function paypal() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    let name = params['name'];

    if(typeof name === 'undefined') {
        alert('Name is undefined. Please go to the home page and enter a name.');
      }

    let link = "paypaypal.html?name=" + name
    window.open(link);
};