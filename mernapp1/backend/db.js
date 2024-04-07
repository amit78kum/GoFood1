const mongoose = require('mongoose');
//const //mongoURI="mongodb+srv://amityyy:amit1199@cluster0.qizdsfh.mongodb.net/gofoodmern1?retryWrites=true&w=majority"
const mongoURI="mongodb+srv://gofood:amit7488@cluster0.atmlwel.mongodb.net/gofoodmern?retryWrites=true&w=majority"
const mongoDB=async()=>{
    try{
        await mongoose.connect(mongoURI);
        console.log("connected");
        let fetched_data=mongoose.connection.db.collection("food_items");
        let data=await fetched_data.find({}).toArray()
        console.log();
        //  const foodCategory=mongoose.connection.db.collection("foodCategory");
        //     let catData=await foodCategory.find({}).toArray()
        // global.food_items=data;
        // global.foodCategory=catData;
           //console.log(global.food_items);
          // callback(err, data, catdata);
    }catch(error){
        console.log("err:",error);
    }

};
module.exports=mongoDB;