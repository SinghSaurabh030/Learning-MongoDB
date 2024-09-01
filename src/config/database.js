const mongoose=require('mongoose');
//first step for dealing with mongo is to connect tom it so this 
//this file connects to mongo
const connect=async()=>{
    await mongoose.connect('mongodb://localhost/twitter_dev');
}
module.exports=connect;