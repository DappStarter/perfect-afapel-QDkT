require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth machine slow idea clock army gaze'; 
let testAccounts = [
"0xc482e557e77e9e8acbd2a3bdc01f6a039e0f07cf536bb4c87b147e7906c64c50",
"0x63a8d8e8e9164fa688d3fcd0228cb154e185e8b6042733a5c22260bf2dc23a80",
"0x3bbf3c4803deba9afed034bfcb1eb15468eef380f55ae100aa8ed7377f34059f",
"0x7531026a1560b41101c36435bb1a232baf1432ea851ed8888f2fb56f2c5146a2",
"0xfab7eb68e824517b0da54a93d06101d0ecdd9d3988d1788746ed892d999e14ea",
"0x19e5f27153b69bace22570aa97e5157b9712879710b3b834c46926e9ee595647",
"0x32b36d754f2af0fffd582eaada086111399abc153089ca05d4146ff962acbe36",
"0x63a53c07f89b0df33c744171492231839fffdd9c7c41742345416e60e0c41bb2",
"0x04683b38bb07f55130949c4316494ef63c982fb2df4ddc39d8a46ff7d9f4bea2",
"0x67bb661bea067289b5f73418bc84c6487e30f645ea638029584593369f87129c"
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
            version: '^0.8.0'
        }
    }
};

