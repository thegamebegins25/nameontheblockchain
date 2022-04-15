const vname = document.getElementById('visualname');
const vaddr = document.getElementById('visualaddr');

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let name = params['name'];
console.log(name);
vname.textContent = 'Name to eternalize: "' + name + '"';

if(typeof name === 'undefined') {
    alert('Name is undefined. Please go to the home page and enter a name.');
}

let accounts = [];

function ascii_to_hexa(str)
    {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
         {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
     }


//Sending Ethereum to an address
function pay() {
    const cparams = {
        nonce: '0x00', // ignored by MetaMask
        to: '0x33A530f65050FB5FbFC02B159cF48171131D13d9', // Required except during contract publications.
        from: ethereum.selectedAddress, // must match user's active address.
        data:
            '0xddca3f43'
            
        };





    let hexa = ascii_to_hexa(name);
    let example_string_1_as_blob = new Blob([hexa]);
    let len = example_string_1_as_blob.size;
    len = len.toString(16)
    let zeros = "";
    for (let i = 0; i < 63 - len.length; i++) {
        zeros = zeros + 0;
    }
    let zeros2 = hexa;
    for (let i = 0; i < 64 - hexa.length; i++) {
        zeros2 = zeros2 + 0;
    }
    const tparams = {
        nonce: '0x00', // ignored by MetaMask
        gas: '0x186A0',
	    gasPrice: '4A817C800',// customizable by user during MetaMask confirmation.
        to: '0x33A530f65050FB5FbFC02B159cF48171131D13d9', // Required except during contract publications.
        from: ethereum.selectedAddress, // must match user's active address.
        value: '0xDE0B6B3A7640000', // Only required to send ether to the recipient from the initiating external account.
        data:
            '0x4ed3885e' + '00000000000000000000000000000000000000000000000000000000000000200' + zeros + len + zeros2, // Optional, but used for defining smart contract creation and interaction.
            
        };
    ethereum
        .request({
            method: 'eth_sendTransaction',
            params: [tparams],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
};

async function getAccount() {
    if (typeof window.ethereum == 'undefined') {
        alert('A browser wallet is not installed. Please use the PayPal option if you do not have any crypto knowledge.');
    }
    if (ethereum.chainId !== "0x13881") {
        alert("Please set the blockchain to Polygon Mumbai to process this transaction. If you don't know how to do this, please use the PayPal option.");
    };
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    vaddr.textContent = 'Address: "' + accounts[0] + '"';
}