const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.put("/:id",async (req,res)=>{
    if(req.body.userid === req.params.id || req.body.isAdmin)
    {
       if(req.body.password)
       {
           try {
            req.body.password = await bcrypt.hash(req.body.password,10);
            
           } catch (error) {
               res.status(500).json(error);
           }
       }

       try {
           const user = await User.findByIdAndUpdate(req.params.id,{
               $set : req.body
           });
           user.save();
           res.status(200).json("Account has been updated");
       } catch (error) {
           res.status(500).json(error)
       }

    }
    else res.status(404).json("You cannot update other account");
})

//delete user
router.delete("/:id",async (req,res) => {
    if(req.body.userid === req.params.id || req.body.isAdmin)
    {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        } catch (error) {
            res.status(500).json(error);
        }
        
    }
    else{
        res.status(404).json("You can't delete other user's account");
    }
})

//get user
router.get("/:id",async (req,res) =>{
    try {
        const user = await User.findById(req.params.id);
        const {password,updatedAt,isAdmin,...others} = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
})

//follow a user
router.put("/:id/follow",async (req,res) => {
     if(req.body.userid !== req.params.id)
     {
        try {
            const user = await User.findById(req.params.id);
            const followUser = await User.findById(req.body.userid);
            if(!user.following.includes(req.body.userid))
            {
                user.following.push(req.body.userid);
                followUser.followers.push(req.params.id);
                user.save();
                followUser.save();
                res.status(200).json("Followed");
            }
            else 
            {
                res.status(500).json("Already following");
            }
        } catch (error) {
            res.status(500).json(error);
        }
     }
     else{
         res.status(500).json("You can't follow yourself");
     }
     
     
})

//unfollow
router.put("/:id/unfollow",async (req,res) => {
    if(req.body.userid !== req.params.id)
    {
       try {
           const user = await User.findById(req.params.id);
           const unFollowUser = await User.findById(req.body.userid);
           if(user.following.includes(req.body.userid))
           {
               await user.updateOne({$pull : {following : req.body.userid}});
               await unFollowUser.updateOne({$pull : {followers : req.params.id}});
               res.status(200).json("Unfollowed");
           }
           else 
           {
               res.status(500).json("Not Following");
           }
       } catch (error) {
           res.status(500).json(error);
       }
    }
    else{
        res.status(500).json("You can't unfollow yourself");
    }
    
    
})

module.exports = router;