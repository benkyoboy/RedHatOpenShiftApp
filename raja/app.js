var express = require('express');
app = express();

app.get('/', function (req, res) {
    res.send('What a GREAT Day. YiiHaaa.. I am Raja!');
})

app.listen(8080, function () {
    console.log('Server listening on port 8080...');
});