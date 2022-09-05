import { SafeEventEmitterProvider } from "@web3auth/base";
import { ethers } from 'ethers'
import { IWalletProvider } from "./walletProvider";

const ethProvider = (provider: SafeEventEmitterProvider, uiConsole: (...args: unknown[]) => void): IWalletProvider => {
  const getAccounts = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });
      const account = accounts[0];
      uiConsole("Eth accounts", account);
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

  const getBalance = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });
      const account = accounts[0];
      const balance = await provider.getBalance(account);
      const balanceInEth = ethers.utils.formatEther(balance);
      uiConsole("Eth balance", balanceInEth);
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

  const signMessage = async () => {
    // get params for backend
    // try {
    //   const pubKey = (await provider.request({ method: "eth_accounts" })) as string[];
    //   const provider = new ethers.providers.Web3Provider(window.ethereum);
    //   const message = "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
    //   (web3.currentProvider as any)?.send(
    //     {
    //       method: "eth_sign",
    //       params: [pubKey[0], message],
    //       from: pubKey[0],
    //     },
    //     (err: Error, result: any) => {
    //       if (err) {
    //         return uiConsole(err);
    //       }
    //       uiConsole("Eth sign message => true", result);
    //     }
    //   );
    // } catch (error) {
    //   console.log("error", error);
    //   uiConsole("error", error);
    // }
  };

  const signAndSendTransaction = async () => {
    // try {
    //   const web3 = new ethers.providers.Web3Provider(window.ethereum);
    //   const accounts = await web3.eth.getAccounts();

    //   const txRes = await web3.eth.sendTransaction({
    //     from: accounts[0],
    //     to: accounts[0],
    //     value: web3.utils.toWei("0.01"),
    //   });
    //   uiConsole("txRes", txRes);
    // } catch (error) {
    //   console.log("error", error);
    //   uiConsole("error", error);
    // }
  };

  const signTransaction = async () => {
    // try {
    //   const web3 = new ethers.providers.Web3Provider(window.ethereum);
    //   const accounts = await web3.eth.getAccounts();
    //   console.log("pubKey", accounts);
    //   // only supported with social logins (openlogin adapter)
    //   const txRes = await web3.eth.signTransaction({
    //     from: accounts[0],
    //     gas: 21000,
    //     to: accounts[0],
    //     value: web3.utils.toWei("0.01"),
    //   });
    //   uiConsole("txRes", txRes);
    // } catch (error) {
    //   console.log("error", error);
    //   uiConsole("error", error);
    // }
  };
  return { getAccounts, getBalance, signMessage, signAndSendTransaction, signTransaction };
};

export default ethProvider;
