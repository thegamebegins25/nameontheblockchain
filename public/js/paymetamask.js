const vname = document.getElementById('visualname');
const vaddr = document.getElementById('visualaddr');
const paybutton = document.getElementById('pay');
paybutton.style.display = 'none';

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

const h2d = hex => parseInt(hex, 16);


//Sending Ethereum to an address
function pay() {

	
	let len = new Blob([name]).size;
    let hexa = ascii_to_hexa(name);
	console.log(len);
    len = len.toString(16)
    let zeros = "";
    for (let i = 0; i < 63 - len.length; i++) {
        zeros = zeros + 0;
    }
    let zeros2 = hexa;
    for (let i = 0; i < 64 - hexa.length % 64; i++) {
        zeros2 = zeros2 + 0;
    }
    const tparams = {
        nonce: '0x00', // ignored by MetaMask
        gas: '0xF4240',
	    gasPrice: '0xBA43B7400',// customizable by user during MetaMask confirmation.
        chainId: '137',
        to: '0x41438fd2ebcd3ad82c17ddb5c285b712ad5b7a94', // Required except during contract publications.
        from: ethereum.selectedAddress, // must match user's active address.
        value: window.fee, // Only required to send ether to the recipient from the initiating external account.
	weiValue : window.feeInt, // For CB Wallet
        data:
            '0x4ed3885e' + '00000000000000000000000000000000000000000000000000000000000000200' + zeros + len + zeros2, // Optional, but used for defining smart contract creation and interaction.
            
        };
    ethereum
        .request({
            method: 'eth_sendTransaction',
            params: [tparams],
        })
        .then((txHash) => {
			let link = "thanks.html?tx=" + txHash + '&name=' + name
		    window.open(link);
		})
        .catch((error) => console.error);

};

async function getAccount() {

    if (typeof window.ethereum == 'undefined') {
        alert('A browser wallet is not installed. Please use the PayPal option if you do not have any crypto knowledge.');
    }
    if (ethereum.chainId !== "0x89") {
        alert("Please set the blockchain to Polygon to process this transaction. If you don't know how to do this, please use the PayPal option.");
    };
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    vaddr.textContent = 'Address: "' + accounts[0] + '"';

    if (accounts[0] == 0xce4ff087a4ac1d346179C1590Ef75F593F3C6cf3) {
        window.fee = 0x0;
        console.log("owner");
    } else {
        const cparams = [{
            to: '0x41438fd2ebcd3ad82c17ddb5c285b712ad5b7a94', // Required except during contract publications.
            from: ethereum.selectedAddress, // must match user's active address.
            data:
                '0xddca3f43'
                
            }];

        ethereum
            .request({
            method: 'eth_call',
            params: cparams,
            })
            .then((txHash) => {
                window.fee = txHash
		window.feeInt = parseInt(txHash, 16)
            })
        }




    // 1 second delay
    setTimeout(function(){
        console.log(window.fee);
        paybutton.style.display = 'inline-block';
    }, 1000);

    
}
