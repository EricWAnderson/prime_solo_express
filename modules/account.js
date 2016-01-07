var randomNumber = require('./randomNumber.js');
var currencyConvert = require('./currencyConvert.js');

var randomUSD = function(){
    var randomUSD = currencyConvert(randomNumber(100,1000000));
    return randomUSD;
};

var balance = function(){
  return '<p>Account balance: </p><p>' + randomUSD() + '</p>';
};

exports.randomUSD = randomUSD;
exports.balance = balance;