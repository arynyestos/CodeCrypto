import { useEffect, useState } from 'react';
import {ethers} from 'ethers';
import abi from "./contracts/MyToken.json"

const provider = new ethers.BrowserProvider(window.ethereum)

function App() {
  
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [contract, setContract] = useState(null);
  const [tokens, setTokens] = useState(null);

  useEffect(() => {
    window.ethereum
      .request({method: "eth_requestAccounts"})
      .then((accounts) => {
        setAccount(accounts[0]);
        window.ethereum.on("accountsChanged", (accounts) => {
          setAccount(accounts[0]);
        })
      })
  }, []);

  useEffect(() => {
    if(!account) return;
    provider.getBalance(account).then((balance) => {
      setBalance(balance.toString());
    });
  }, [account]);

  useEffect(() => {
    async function contractFunct(){
      const contractAddress = "0x0686711BF274FB0C239FBb270FB3d2288F778876";
      const signer = await provider.getSigner(account);
      setContract(new ethers.Contract(contractAddress, abi.abi, signer));
    }
    contractFunct();
  }, [account]);

  useEffect(() => {
    if(!contract) return;
    contract.balanceOf(account).then((balance) => {
      setTokens(balance.toString());
    });
  }, [contract, account]);

  async function handleSubmit(e){
    e.preventDefault();
    const [address, amount] = e.target;
    const tx = await contract.transfer(address.value, amount.value);
    await tx.wait();
    console.log("Transfer successful:", tx);
  }

  return (
  <>
    <div>{account}'s balance: {balance} ETH and {tokens} MTK</div>

    <form onSubmit={(e) => {handleSubmit(e)}}>
      <input type="text" name='address' placeholder='address'></input>
      <input type="text" name='amount' placeholder='amount'></input>
      <button type='submit'>Send</button>
    </form>
  </>
  )
}

export default App
