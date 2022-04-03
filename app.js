const ethereumButton = document.querySelector('.enableEthereumButton');
const sendEthButton = document.querySelector('.sendEthButton');

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
sendEthButton.addEventListener('click', () => {
  let hexa = ascii_to_hexa("blank")
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
    to: '0x7B1Ce58a46CEd7239e2D82dD3c9F06b9A82b08d1', // Required except during contract publications.
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
});

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}