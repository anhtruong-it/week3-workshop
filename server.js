var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var http = require('http').Server(app);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/www'));
app.listen(3000,()=>{
//let server = http.listen(3000, function () {
//let host = server.address().address;
//let port = server.address().port;
console.log("My First Nodejs Server!");
//console.log("Server listening on: "+ host + " port: " + port);
});

app.get('/', function(req, res){
    res.sendFile(__dirname + "/www/login-form.html")
});

app.post('/api/login', function(req, res){

    if (!req.body) {
        return res.sendStatus(400)
    }

    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    if (req.body.email == "abc@com.au" && req.body.upwd == "123"){
        customer.valid = true;
    } else{
        customer.valid = false;
    }
    res.send(customer);
});