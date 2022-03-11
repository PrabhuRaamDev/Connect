const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const res = require('express/lib/response');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');

dotenv.config();

//database connection
mongoose.connect(process.env.MONGODB_URL,{
    useUnifiedTopology : true,
    useNewUrlParser : true
},
()=>{
    console.log("Database is running");
})

//middleware
app.use(express.json());
app.use(morgan("common"));
app.use("/api/users",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/post",postRouter);


app.get("/",(req,res)=>{
    res.json("server");
})

app.listen(4000,()=>{
    console.log(`server running at port ${4000}`);
})

 