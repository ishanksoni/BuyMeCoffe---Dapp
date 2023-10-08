pragma solidity ^0.8.9;

contract Transaction {
    struct transaction {
        string name;
        string message;
        uint time;
        address from;
    }

    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }
    event transactionCompleted(address from, string message);

    transaction[] transactions;

    function buyCoffee(string calldata name, string calldata message) external payable {
        require(msg.value > 0);
        owner.transfer(msg.value);
        transactions.push(transaction(name, message, block.timestamp, msg.sender));
        emit transactionCompleted(msg.sender, message);
    }

    function allTransaction() public view returns(transaction[] memory) {
        return transactions;
    }

}
