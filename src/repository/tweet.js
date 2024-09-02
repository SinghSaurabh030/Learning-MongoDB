const Tweet=require('../models/tweet');

class TweetRepository{

    async create(data){
        try {
            const tweet=await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async update(id,data){
        try {
            const tweet=await Tweet.findByIdAndUpdate(id,data,{new:true});
            return  tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id){
        try {
            const tweet=await Tweet.findById(id);
            return  tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async getWithComments(id){
        try {
            //populate is used to completely extract the comment array with values 
            //without populate id only array of id will be visible
            //here we dont have direct association we have made array of comments therfore we have populate({path:'comments'})
            //for direct association populate('comments') will work

            //lean() cause returning of js object instead of mongoose object which will not have getters,setters,save()
            const tweet=await Tweet.findById(id).populate({path:'comments'}).lean();
            return  tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id){
        try {
            const tweet=await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    /*PAGINATION IN MONGO */
    /*
    offset discribe how many documents to leave before starting
    limit describes how many documents to show;
     */
    async getAll(offset,limit){
        try{
            const tweet=await Tweet.find().skip(offset).limit(limit);
            return tweet;
        }catch(error){
            console.log(error);
        }
    }

    

}
module.exports=TweetRepository;