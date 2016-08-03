
var express = require('express');
var router = express.Router();

router.get('/comments/:postId', getCommentsForAPost);
router.post('/comments', createComment);
router.delete('/comments/:commentId', deleteComment);
router.put('/comments/:commentId', updateComment);

module.exports = router;

function getCommentsForAPost(req, res, next){
  console.log('getting all of the comments');
  next(); //if you don't do this it'll make the command line hang
}
function createComment(req, res, next){
  console.log('creating a comment');
  next();
}
function deleteComment(req, res, next){
  console.log('deleting a comment');
  next();
}
function updateComment(req, res, next){
  console.log('updating a comment');
  next();
}
