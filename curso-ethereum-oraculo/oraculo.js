// import Web3 from 'web3';
// import { Chain, Common, Hardfork } from '@ethereumjs/common'
// import {Transaction} from '@ethereumjs/tx'
// import fs from 'fs'
// import fetch from 'node-fetch';

// const common = new Common ({ chain: Chain.Mainnet, hardfork: Hardfork. London })
// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
// const address = '0xA77e5F2C5314741BE8c30Bae4137ee6986608ff5'
// const privateKey = Buffer.from('cfaa3c75201ece32e481c5139db94a52a4de649a515167956c9df767fe9f55f9', 'hex')
// const contractAddress = '0xfEC6cFd297Ff1d6105bDad6271A98bB11c97baC9'
// // const contractAbi = JSON.parse(fs.readFileSync('./ContratoOraculo.json')).abi;
// const contractAbi = JSON.parse(fs.readFileSync('./build/contracts/OraculoNASA.json')).abi;
// // console.log('Contract ABI:', contractAbi);
// const contractInstance = new web3.eth.Contract(contractAbi, contractAddress)

// web3.eth.getBlockNumber()
//     .then(n => listenEvent(n - 1))

// function listenEvent (lastBlock) {
//     contractInstance.events._callbackNewData({}, { fromBlock: 'latest' }, (err, event) => {
//         event? updateData(): null
//         err? console.log(err): null
//     })
// }

// function updateData() {
//     const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-10-10&end_date=2022-10-10&api_key=DEMO_KEY'

//     fetch(url)
//         .then (response => response.json())
//         .then(json => setDataContract (json.element_count))
// } 

// function setDataContract (_value) {
//     // web3.eth.getTransactionCount (address, (err, txNum) => {
//     web3.eth.getTransactionCount (address, async (err, txNum) => {
//         contractInstance.methods.setNumeroMeteoritos(_value).estimateGas({}, (err, gasAmount) => {
//             let rawTx = {
//                 nonce: web3.utils.toHex(txNum),
//                 // gasPrice: 10000000000, //web3.utils.toHex (web3.utils.towei('10', 'gwei')),
//                 gasPrice: 1000000, //web3.utils.toHex (web3.utils.towei('10', 'gwei')),
//                 gasLimit: 4712388, //web3.utils.toHex(gasAmount),
//                 // gasPrice: web3.utils.toHex(web3.utils.toWei('1', 'gwei')),
//                 // gasLimit: web3.utils.toHex(gasAmount),
//                 to: contractAddress,
//                 value: '0x00',
//                 data: contractInstance.methods.setNumeroMeteoritos (_value).encodeABI()
//             }
//             console.log(rawTx.gasPrice)
//             console.log(rawTx.gasLimit)

//             const tx = Transaction.fromTxData(rawTx, { common })
//             const signedTx = tx.sign(privateKey)
//             const serializedTx = signedTx.rawTransaction//.serialize()
//             //console.log('0x' + serializedTx.toString('hex'))
//             console.log('0x' + serializedTx)

//             // web3.eth.sendSignedTransaction(serializedTx)
//             const signedTransaction = "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
//             web3.eth.sendSignedTransaction(signedTransaction).on('sending', transactionToBeSent => console.log(transactionToBeSent));
//             // web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('sending', transactionToBeSent => console.log(transactionToBeSent));
//             console.log("actualizado")
//         })
//     })
// }



// import Web3 from 'web3'; 
// import { Chain, Common, Hardfork } from '@ethereumjs/common'
// import { Transaction } from '@ethereumjs/tx' 
// import fs from 'fs' 
// import fetch from 'node-fetch'; 

// const common = new Common({ chain: Chain.Mainnet, hardfork: Hardfork.London })

// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

// const address = '0xA77e5F2C5314741BE8c30Bae4137ee6986608ff5'
// const privateKey = Buffer.from('cfaa3c75201ece32e481c5139db94a52a4de649a515167956c9df767fe9f55f9', 'hex')
// const addressContract = '0x4dF78E9F049921f3b1Ba79d410F34b6A1bFd8398'
// const contractAbi = JSON.parse(fs.readFileSync('./ContratoOraculo.json'))//.abi;
// const contractInstance = new web3.eth.Contract(contractAbi, addressContract)

// web3.eth.getBlockNumber()
//     .then(n => listenEvent(n - 1))

// function listenEvent(lastBlock) {
//     contractInstance.events._callbackNewData({}, { fromBlock: 'latest' }, (err, event) => {
//         event ? updateData() : null
//         err ? console.log(err) : null
//     })
// }

// function updateData() {
//   const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-10-10&end_date=2022-10-10&api_key=DEMO_KEY'

//   fetch(url)
//       .then(response => response.json())
//       .then(json => setDataContract(json.element_count))
// }

// function setDataContract(_value) {
//   web3.eth.getTransactionCount(address, (err, txNum) => {
//       contractInstance.methods.setNumeroMeteoritos(_value).estimateGas({}, (err, gasAmount) => {
//         let rawTx = {
//           nonce: web3.utils.toHex(txNum),
//           gasPrice: 10000000000, //web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//           gasLimit: 4712388,//web3.utils.toHex(gasAmount),
//           to: addressContract,
//           value: '0x00',
//           data: contractInstance.methods.setNumeroMeteoritos(_value).encodeABI()
//         }
//         const tx = Transaction.fromTxData(rawTx, { common })
//         const signedTx = tx.sign(privateKey)
//         const serializedTx = signedTx.serialize()
  
//         web3.eth.sendSignedTransaction(serializedTx)
//         console.log("actualizado")
//       })
//   })
// }

import Web3 from 'web3'; 
import fetch from 'node-fetch'; 
import fs from 'fs'


const web3 = new Web3("ws://localhost:8545");

const address = '0xA77e5F2C5314741BE8c30Bae4137ee6986608ff5'
const privateKey = Buffer.from('cfaa3c75201ece32e481c5139db94a52a4de649a515167956c9df767fe9f55f9', 'hex')
const contractAddress = '0x1bB9CCA5561F706E749cbA596aa6F45a8ee88619'
const contractABI = JSON.parse(fs.readFileSync('./ContratoOraculo.json'))//.abi;
const contractInstance = new web3.eth.Contract(contractABI, contractAddress)

web3.eth.getBlockNumber()
    .then(n => listenEvent(n - 1))

function listenEvent(_lastBlock) {
    contractInstance.events._callbackNewData({}, { fromBlock: 'latest' }, (err, event) => {
        event ? updateData() : null
        err ? console.log(err) : null
    })
}

function updateData() {
  const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-10-10&end_date=2022-10-10&api_key=DEMO_KEY'

  fetch(url)
      .then(response => response.json())
      .then(json => setDataContract(json.element_count))
}

function setDataContract(_value) {
  web3.eth.getTransactionCount(address, async (err, txNum) => {
        const componerTx = await web3.eth.signTransaction({
          from: address,
          nonce: web3.utils.toHex(txNum),
          gasPrice: 10000000000,
          gasLimit: 4712388,
          to: contractAddress,
          value: '0x00',
          data: contractInstance.methods.setNumeroMeteoritos(_value).encodeABI()
        }, privateKey)
        const tx = await web3.eth.sendSignedTransaction(componerTx)
        console.log(tx)
      })
}


