const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(index, timestamp) {
        this.index = index;
        this.timestamp = timestamp;
        this.transactions = [];
        this.previousHash = '';
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.transactions)).toString();
    }

    addNewTransaction(sender, recipient, amount) {
        this.transactions.push({
            sender,
            recipient,
            amount
        })
    }

    getTransactions() {
        return this.transactions;
    }
}
exports.Block=Block;
