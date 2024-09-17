const express = require('express');
const { requireSignIn } = require('../controllers/userController');
const { createPostController, getAllPostsController, getUserPostPostsController } = require('../controllers/postController');

//router object
const router = express.Router();

//Create Post 
router.post('/create/post', requireSignIn, createPostController )

//Get All Posts
router.get('/get-all-posts', getAllPostsController )

//Get User Posts
router.get('/get-user-posts', requireSignIn, getUserPostPostsController )

//export
module.exports = router;
