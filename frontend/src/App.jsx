import { useState, useEffect } from 'react'
import './App.css'
import abi from './abiJson/Transaction.json'
import { ethers } from "ethers";
import BuyMeCoffee from './components/BuyMeCoffee';
import Transactions from './components/Transactions';

function App() {
  const [state, setState] = useState ({
    signer: null,
    contract: null
  });

  const [account, setAccount] = useState (
    'not connected'
  );

  useEffect(() => {
    const connectToBlockChain = async () => {
      const contractAddress = "0xD59844C76E1024798015C58690d7A13183B35537";
      const contractAbi = abi.abi;
      try {
        if (ethereum) {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts);
  
          const provider = new ethers.WebSocketProvider(ethereum);
          let signer;

          try {
            signer = await provider.getSigner();
          } catch (signerError) {
            console.error('Error getting signer:', signerError);
            throw signerError;
          }
  
          const contract = new ethers.Contract(contractAddress, contractAbi, signer);
          console.log("contract", contract);
  
          setState({ signer, contract });
        } else {
          console.error('Ethereum provider not found. Please install MetaMask or a similar extension.');
        }
      } catch (error) {
        console.error('Error connecting to Ethereum:', error);
      }
    };
    connectToBlockChain();
  }, [])
  return (
    <div className='App'>
      <h4>Connected Account:: {account} </h4>
      <BuyMeCoffee state = {state}> </BuyMeCoffee>
      <Transactions state = {state}> </Transactions>
    </div>
  )
}

export default App
