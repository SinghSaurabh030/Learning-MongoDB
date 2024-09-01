const express=require('express');
const  connect  = require('./config/database');
const app=express();
const PORT=3000;
//requiring model doesnt create document
const Tweet=require('./models/tweet');
const TweetRepository = require('./repository/tweet');
const Comment = require('./models/comment');


app.listen(PORT,async()=>{
    console.log('connected to server');
    await connect();
    console.log('connected to mongodb');

    //creating document in collection
    // const tweet=await Tweet.create(
    //     {
    //         content:"new data",
    //         userEmail:"abc@gmail.com"
    //     }
    // );

    //finding and updating
    // const tweet=await Tweet.findById('66d364288c93f14a18c5ac21');
    // tweet.userEmail='saurabh@singh.com';
    // await tweet.save();
    // console.log(tweet);

    //using repository
    //CREATE
    // const repo=new TweetRepository();
    // const tweet=await repo.create({
    //     content:"hey there",
    //     userEmail:"abc@g.com"
    // });
    // console.log(tweet);
    //UPDATE
    //findbyId&Update updates the document but return the old value which is now update
    //to return the current latest updated document pass option parameter in findbyId&Update as {new:true}
    // const repo=new TweetRepository();
    // const tweet=await repo.update('66d36d3ff11254f084cd7434',{
    //     content:"hey there"
    // });
    // console.log(tweet);

    // creating comment document and pushing in tweet
    // const tweet=await Tweet.create(
    //     {
    //         content:"new data",
    //         userEmail:"abc@gmail.com"
    //     }
    // );
    // const comment=await Comment.create({
    //     content:"Nice pic"
    // })
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);


    const tweetRepo=new TweetRepository();
    console.log(
        await tweetRepo.get('66d41065d110567df80758e0')

    );

});