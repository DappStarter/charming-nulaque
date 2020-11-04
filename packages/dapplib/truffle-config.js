require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember solid hockey argue front skirt'; 
let testAccounts = [
"0x80a84a2865fbf71430ff862b7d4624187388f16500d0cf348c21595eabb36246",
"0x49801c3f69b3df2039e33acb053c60eaeb0ce3548182919b35ef7fc38c079cdd",
"0xba4a3f0cbbe2d071a9fbe16a04d157040a1be1aa54e3a2f0cbdfff619a0dd3ce",
"0xbe57924f24d773b002700744546728e4c6dd193edcdd0396a8242cb7557e76d4",
"0xe1d6ffe29e5592e2292c7e66eb488a9359a762a58625521425dbe1d8b8ab54d3",
"0x64ea142fd534a9bc753defb0a57a44a0f26267667c849162e3f04be5b790155b",
"0x5d4cc6524196200190ad521947802b9987f9f0211d86ccdfe081dfdb6a6ae52f",
"0xb3543d1c13c633d0237580db7fd0d0dcaaad0a4814081793dcc0bcba2e99568c",
"0x2a3a27b9015a07979e8b49316f8187913ea44ad52cad800461220d7bf3a46a48",
"0x229eeda8fb35b6acab21c7de8d610d375ea45768a6c03083e7ea347aada4c1fa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
