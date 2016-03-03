var express = require('express')

var app = express()
var port = 5000

app.get('/', function( req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})

app.get('/index.css', function (req, res) {
    res.sendFile(__dirname + '/dist/index.css')
})

app.get('/index.js', function (req, res) {
    res.sendFile(__dirname + '/dist/index.js')
})

app.listen(port, function () {
    console.log("Express server on port " + port)
})