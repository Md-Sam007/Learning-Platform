import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv"
const cloudVid=async (req,res,next)=>{
    dotenv.config()
    cloudinary.config({
        cloud_name:process.env.CLOUD_NAME,
        api_key:process.env.API_KEY,
        api_secret:process.env.API_KEY_SECRET,
        secure:true
    })
    const {title}=req.headers
    
    
    const vid=cloudinary.url(title,{
        resource_type: "video",

    })
    return res.json({videoUrl:vid})
    

}




const cloudPh=(thnail)=>{
    dotenv.config();
    cloudinary.config({
        cloud_name:process.env.CLOUD_NAME,
        api_key:process.env.API_KEY,
        api_secret:process.env.API_KEY_SECRET,
        secure:true
    })
    const img=cloudinary.url(thnail,{
        resource_type: "image",

    })
    return img;

}
export {cloudVid ,cloudPh}