var express = require('express');
app = express();

app.get('/', function (req, res) {
    res.send('Hello Yes!Man. Good day');
})

app.get('/mars', function (req, res) {
    res.send('Hello Yes!Man from MARS. ;-)');
})

app.listen(8080, function() {
    console.log('Welcome to Red Hat OpenShift Introduction Course.')
})