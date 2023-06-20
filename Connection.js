require("dotenv").config();
const mongoose=require("mongoose");

const ConnectDb=()=>{
    return mongoose.connect(process.env.Mongodburl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
};
module.exports=ConnectDb;