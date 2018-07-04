var express = require('express');
const crypto = require('crypto');
const bitcoin = require('bitcoinjs-lib');
const rng = () => crypto.randomBytes(32);
var app = express();

const testnet = bitcoin.networks.testnet;
const keyPair = bitcoin.ECPair.makeRandom({network: testnet,rng});
const wif = keyPair.toWIF();
const address = keyPair.getAddress();

console.log(wif);
console.log(address);
app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
