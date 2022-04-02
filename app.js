const ethereumButton = document.querySelector('.enableEthereumButton');
const sendEthButton = document.querySelector('.sendEthButton');

let accounts = [];

//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
  const tparams = {
    nonce: '0x00', // ignored by MetaMask
    gas: '0x2710', // customizable by user during MetaMask confirmation.
    to: '0x61a80784e389563cdc1027012d4D5d7b83Defc5e', // Required except during contract publications.
    from: ethereum.selectedAddress, // must match user's active address.
    value: '0xDE0B6B3A7640000', // Only required to send ether to the recipient from the initiating external account.
    //data:
      //'', // Optional, but used for defining smart contract creation and interaction.
      
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