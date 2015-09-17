 var express = require('express');
var app = express();

app.use(express.static(__dirname + ''));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/static/html/index.html');
});

app.listen(process.env.PORT || 3000, function() {
    console.log("listening on 3000");
});