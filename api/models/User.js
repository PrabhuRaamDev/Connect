const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        max : 20
    },
    email : {
        type : String,
        required : true,
        unique : true,
        max : 40
    },
    password : {
        type : String,
        required : true,
        min : 6
    },
    profilepictre : {
        type : String,
        default : ""
    },
    coverpictre : {
        type : String,
        default : ""
    },
    followers : {
        type : Array,
        default : []
    },
    following : {
        type : Array,
        default : []
    },
    isadmin : {
        type : Boolean,
        default : false
    },
    desc: {
        type: String,
        max: 50,
      },
    city: {
        type: String,
        max: 50,
    },
    from: {
        type: String,
        max: 50,
      },
    job : {
        type : String,
        max : 30
    },
    company : {
        type : String,
        max : 40
    }

},
{
    timestamps : true
})

module.exports = mongoose.model("user",userSchema);



