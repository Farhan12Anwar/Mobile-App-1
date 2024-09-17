const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostsController,
  getUserPostPostsController,
  deletePostController,
  updatePostController,
} = require("../controllers/postController");

//router object
const router = express.Router();

//Create Post
router.post("/create/post", requireSignIn, createPostController);

//Get All Posts
router.get("/get-all-posts", getAllPostsController);

//Get User Posts
router.get("/get-user-posts", requireSignIn, getUserPostPostsController);

//Delete Posts
router.delete("/delete-post/:id", requireSignIn, deletePostController);

//Update Posts
router.put("/update-post/:id", requireSignIn, updatePostController);

//export
module.exports = router;
