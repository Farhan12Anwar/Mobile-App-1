const postModel = require("../models/postModel");

//create post
const createPostController = async (req, res) => {
  try {
    const { title, description } = req.body;

    //validate
    if (!title || !description) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const post = await postModel({
      title,
      description,
      postedBy: req.auth._id,
    }).save();
    res.status(201).send({
      success: true,
      message: "Post Created Successfully",
      post,
    });
    console.log(req);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating post API",
      error,
    });
  }
};

//Get All Posts
const getAllPostsController = async (req, res) => {
  try {
    const posts = await postModel
      .find()
      .populate("postedBy", "_id name")
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "All Posts Data",
      posts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get all posts API",
      error,
    });
  }
};

//get user posts
const getUserPostPostsController = async(req, res) => {
  try {
    const userPosts = await postModel.find({ postedBy:req.auth._id })
    res.status(200).send({
      success:true,
      message:'User Posts',
      userPosts,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:'Error in user Post API',
      error
    })
  }
};

//delete post
const deletePostController = async(req, res) => {
  try {
    const { id } = req.params;
    await postModel.findByIdAndDelete({_id:id})
    res.status(200).send({
      success:true,
      message:'Your post has been deleted!',
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:'Error in delete post API',
      error,
    })
  }
};

//Update Post
const updatePostController = async(req, res) => {
  try {
    const [title, description] = req.body;
    //post find
    const post = await postModel.findById({_id:req.params.id})
    //validation
    if(!title || !description) {
      return res.status(500).send({
        success:false,
        message:'Please Provide Post Title Or Description',
      })
    };
    
    const updatedPost = await postModel.findByIdAndUpdate({_id:req.params.id}, {
      title: title || post?.title,
      description: description || post?.description
    },{new:true});
    res.status(200).send({
      success:true,
      message:'Post Updated Successfully',
      updatedPost,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:'Error in updating post API',
      error
    });
  }
}

module.exports = { createPostController, getAllPostsController, getUserPostPostsController, deletePostController, updatePostController };
