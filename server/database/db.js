import mongoose from "mongoose";

export const Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ecommerce-web-shard-00-00.7l9xu.mongodb.net:27017,ecommerce-web-shard-00-01.7l9xu.mongodb.net:27017,ecommerce-web-shard-00-02.7l9xu.mongodb.net:27017/project1?ssl=true&replicaSet=atlas-b0mjbe-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce-web`
    try{
       await mongoose.connect(URL)
       console.log("Database Connected Successfully")
    } 
    catch(error){
        console.log("Error while Connecting with the database",error.message);
    }
}

export default Connection