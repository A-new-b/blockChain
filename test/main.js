// import {BlockChain} from "BlockChain";

let {BlockChain} = require('./BlockChain')
const testCoin = new BlockChain;
console.log(JSON.stringify( testCoin.chain, undefined, 2));
