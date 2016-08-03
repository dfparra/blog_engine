
var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var commentRouter = require('./routes/comments.js'); // the ./ says that you start in the same area

var port = process.env.PORT || 8080;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());
server.use(commentRouter); //tells the server to use this router

server.get('/', function(req,res){
  res.send('success!');
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
