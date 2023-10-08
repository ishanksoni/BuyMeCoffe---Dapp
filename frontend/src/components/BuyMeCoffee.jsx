import { ethers } from "ethers";

const BuyMeCoffee = ({state}) => {
    const sendEth = async(event) => {
        event.preventDefault();
        const {contract} = state;
        const name = document.querySelector("#name").value;
        const mess = document.querySelector("#message").value;
        const amount = {value: ethers.parseEther("0.0001")};
        const transction = await contract.buyCoffee(name, mess, amount);
        await transction.wait();
        console.log("Completed :)");

        
    }

    return <> 
    <form onSubmit={sendEth}>
        <input id="name" placeholder="name"></input>
        <input id="message" placeholder="hey hey keep growing"></input>
        <button>send</button>
    </form>
    </>
}
export default BuyMeCoffee;