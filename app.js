var express = require('express');
app = express();

app.get('/', function (req, res) {
    res.send('Hello Yes!Man. Good day');
})

app.get('/mars', function (req, res) {
    res.send('Hello Mars. I am from Venus. ;-)');
})

app.listen(8080, function() {
    console.log('Welcome to Red Hat OpenShift Introduction Course.')
})