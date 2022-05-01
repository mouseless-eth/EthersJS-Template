const ethers = require('ethers');
require('dotenv').config();

// setting up dotenv variables
const NODE_URL = process.env.NODE_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// setting up wallet + provider
const provider = new ethers.providers.JsonRpcProvider(NODE_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY);
const signer = wallet.connect(provider);

provider.on('block', async (blockNumber) => {
  console.log(blockNumber);
});
