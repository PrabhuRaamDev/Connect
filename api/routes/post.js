const Post = require('../models/Post');
const User = require('../models/User');
const router = require('express').Router();

//create post
router.post("/",(req,res) =>{
     
     try {
        const newPost = new Post(req.body);
        const post = newPost.save();
        res.status(200).json(post);
     } catch (error) {
         console.log(error);
     }

})

//update post
router.put("/:id",async (req,res) =>{
    try {
        const oldPost = await Post.findById(req.params.id);
        if(req.params.id === req.body.postId)
        {
            await oldPost.updateOne({$set : req.body});
            const newPost = await oldPost.save();
            res.status(200).json("Successfully Updated");
            
        }
        else res.status(404).json("You cannot update other user's post")
    } catch (error) {
        console.log(error);
    }
})

//delete post
router.delete("/:id",async (req,res) =>{
    const post = await Post.findById(req.params.id);
    if(req.body.userId === post.userId)
    {
       await post.delete();
       res.status(200).json("Successfully Deleted");
    }
    else{
        res.status(500).json("You cannot delete other user's post");
    }
})

//like post
router.post("/:id/like",async (req,res) => {
    const post = await Post.findById(req.params.id);
    try {
        if(!post.likes.includes(req.body.userId))
        {
            await post.updateOne({$push : {likes : req.body.userId}});
            res.status(200).json("liked");
        }
        else{
            await post.updateOne({$pull : {likes : req.body.userId}});
            res.status(200).json("Disliked");
        }
    } catch (error) {
        console.log(error);
    }
})

router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //timeline posts
  
  router.get("/timeline/:userId", async (req, res) => {
    try {
      const currentUser = await User.findById(req.params.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.following.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/profile/:username",async(req,res) => {
  try {
    const user = await User.findOne({username : req.params.username});
    const posts = await Post.find({userId : user._id});
    res.status(200).json(posts);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;