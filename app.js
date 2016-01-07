/**
 * Created by ericanderson on 1/6/16.
 */
var express = require('express');
var path = require('path');
var account = require('./modules/account.js');

var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '/public/views/index.html'));
});

app.get('/balance', function(request, response){
    balance = account.balance();
    response.send(balance);
});

var server = app.listen(3000, function(){
   var port = server.address().port;
    console.log('Listening on port', port);
});