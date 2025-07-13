import express, { json } from "express";
import cors from "cors";
import { connectDb } from "./mongoose/connection.js";
import { validation,auth,logout} from "./mongoose/validation/validation.js";
import { registration,LoginValidation,ReqCourse,studentInfo,updateStudent ,Lectures ,addCourses} from "./mongoose/db/db.js";
import cookieParser from 'cookie-parser';

import { cloudPh, cloudVid } from "./cloudinary/cloud.js";

import dotenv from "dotenv";

const app=express();
const port =4000;

dotenv.config(); // ✅ load .env variables

app.use(cookieParser());

connectDb();
app.use(express.json());
app.use(cors({
  origin:"http://localhost:3000",
  methods:["GET","POST"],
   credentials: true, 
}))

app.get("/",async (req,res)=>{
    console.log(req.body)
    console.log("success");
   
})
app.get("/api/me",auth);

app.get("/api/logout",logout);

app.get("/vid",cloudVid)

app.post("/registration",validation,registration);
app.post("/Login",validation,LoginValidation);

app.get("/course",ReqCourse,(req,res)=>{
    
    req.Mydata.forEach(element => {
        if(element.thumbnail){
          element.thumbnail=cloudPh(element.thumbnail);
        }
        
    });
    
    return res.status(200).json({message:"Data Retrived Successfully",data:req.Mydata});

});

app.post("/addCourse",addCourses);


app.post("/update",validation,auth,updateStudent);

app.get("/student/data",auth,studentInfo)

app.get("/Mycourse/lectures",Lectures);

app.listen(port,()=>{
    console.log("Server running on http://localhost:4000")
})
