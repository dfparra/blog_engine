
var express = require('express');
var router = express.Router();

router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostsById);
router.post('/posts', createPost);
router.delete('/posts/:id', deletePost);
router.put('/posts/:id', updatePost);

module.exports = router;

function getAllPosts(req, res, next){
  console.log('getting all posts');
  next();
}
function getPostsById(req, res, next){
  console.log('getting post with this id');
  next();
}
function createPost(req, res, next){
  console.log('creating a post');
  next();
}
function deletePost(req, res, next){
  console.log('deleting a comment');
  next();
}
function updatePost(req, res, next){
  console.log('updating a comment');
  next();
}
