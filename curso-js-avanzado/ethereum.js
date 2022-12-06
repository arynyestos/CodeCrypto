var Web3 = require("web3")
//provider
var testnet = "https://eth-goerli.g.alchemy.com/v2/b1eWzpsVmmJG91D4X9rdkONgf6hwai1Q" // Cuenta de pruebas
// var testnet = "https://eth-mainnet.g.alchemy.com/v2/y_C6MmCDzb2tMAwRFhqfmwM3J_pMhhzu" // Cuenta principal
//public account
var walletAddress = "0x59dfDd2af55E3D636A2cc0a3338615E59056E478" // Cuenta de pruebas
// var walletAddress = "0xB36Fb73bFA836a928dAfA8131095b4e7e598b8a7" // Cuenta principal
//conexión
const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
// obtenemos el balance
web3.eth.getBalance(walletAddress).then(i => {
    // convertimos a ether
    const etherValue = Web3.utils.fromWei(i, 'ether');
    console.log(`${etherValue} ether`)
}).catch(e => {
    console.log(e)
})

