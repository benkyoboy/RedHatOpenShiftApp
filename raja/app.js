var express = require('express');
app = express();

app.get('/', function (req, res) {
    res.send('What a GREAT Day. YiiHaaa.. I am Raja! My Favourite hero is Genghis Khan.<br/> &copy; Copyright 2020 - Arif Cloud Solutions');
})

app.listen(8080, function () {
    console.log('Server listening on port 8080...');
});