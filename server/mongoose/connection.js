import mongoose from "mongoose";

const connectDb=async ()=>{
    try{
        const result = await mongoose.connect("mongodb://localhost:27017/learning_management_system",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });

    }catch (e){
        console.log(e)
    }
}
export {connectDb};