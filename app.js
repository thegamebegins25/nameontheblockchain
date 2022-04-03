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
  let example_string_1 = "test1";
  let example_string_1_as_blob = new Blob([example_string_1]);
  let len = example_string_1_as_blob.size;
  len = len.toString(16)
  let zeros = "";
  for (let i = 0; i < 32 - cars.length; i++) {
    zeros = zeros + 0;
  }
  const tparams = {
    nonce: '0x00', // ignored by MetaMask
    gas: '0x2710', // customizable by user during MetaMask confirmation.
    to: '0x61a80784e389563cdc1027012d4D5d7b83Defc5e', // Required except during contract publications.
    from: ethereum.selectedAddress, // must match user's active address.
    value: '0xDE0B6B3A7640000', // Only required to send ether to the recipient from the initiating external account.
    data:
      '0x4ed3885e' + zeros + len + ascii_to_hexa("test1") + '00000000000000000000000000000000000000', // Optional, but used for defining smart contract creation and interaction.
      
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