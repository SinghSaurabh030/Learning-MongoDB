const mongoose=require('mongoose');

//creating schema that is only blue print 
//in mongo if certain attribute is not mentioned as required than it is not mandatory to mention to it unlike NULL in SQL
//timestamps is used to get updated at and created at
const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String
    },
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
},{timestamps:true});

tweetSchema.virtual('CommentWithOwner').get(function(){
    return `${this.content} created by ${this.userEmail}`;
});

tweetSchema.pre('save',
    function(next){
        console.log('inside hook');
        this.userEmail='new@user';
        next();
    }
)
//creating actual model from bluprint
const Tweet=mongoose.model('Tweet',tweetSchema);
module.exports=Tweet;