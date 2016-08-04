
var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var cors = require('cors');
// Files from the routes folder
var commentRouter = require('./routes/comments.js'); // the ./ says that you start in the same area
var postRouter = require('./routes/posts.js');
var mongoose = require('mongoose');

var port = process.env.PORT || 8080;
//process.env is for Heroku deployment (similar to port)
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI; //Looks at the route and pulls out mongoURI

mongoose.connect(mongoURI);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());
// Files from the routes folder
server.use(commentRouter); //tells the server to use this router
server.use(postRouter);

server.get('/', function(req,res){
  res.send('success!');
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
