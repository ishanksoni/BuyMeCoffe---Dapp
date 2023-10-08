import { useState, useEffect } from 'react'
import './App.css'
import abi from './abiJson/Transaction.json'
import { ethers } from "ethers";

function App() {
  const [state, setState] = useState ({
    provider: null,
    signer: null,
    contract: null
  });

  const [account, setAccount] = useState ({
    status: 'not connected'
  });

  useEffect(() => {
    const connectToBlockChain = async () => {
      const contractAddress = "0xD59844C76E1024798015C58690d7A13183B35537";
      const contractAbi = abi.abi;

      if (ethereum) {
        ethereum
          .request({ method: 'eth_requestAccounts' })
          .then((accounts) => {
            setState(accounts);
            c
            const contract = new ethers.Contract(
              contractAddress,
              contractAbi,
              signer
            )

            console.log("contract", contract);
            setState(provider, signer, contract);

            // `accounts` will contain the user's Ethereum accounts if access is granted
          })
          .catch((error) => {
            console.error('Error connecting to Ethereum:', error);
          });
      } else {
        console.error('Ethereum provider not found. Please install MetaMask or a similar extension.');
      }
    }

    connectToBlockChain();
  }, [])
  return (
    <div className='App'>
    </div>
  )
}

export default App
