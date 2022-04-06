const paypal = document.querySelector('.paypal');
const metamask = document.querySelector('.metamask');

//Sending Ethereum to an address
metamask.addEventListener('click', () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    let name = params['name'];

    if(typeof name === 'undefined') {
        alert('Name is undefined. Please go to the home page and enter a name.');
      }

    let link = "paymetamask.html?name=" + name
    window.location.href = link;
});