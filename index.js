var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile("index.html");
});

app.listen(PORT,function(){
  console.log("Live at Port" + PORT);
});
