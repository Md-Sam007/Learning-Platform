
import bcrypt from "bcryptjs";
import dotnet from "dotenv";
import jwt from "jsonwebtoken"

import { student,course } from "../schema.js";


const registration = async (req, res, next) => {
    const { username, password, name } = req.body.value;
     

    try {

        const existingUser = await student.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already existing" })
        }
        const hashpassword = await bcrypt.hash(password, 10);
        await student.create({
            name: name,
            username: username,
            password: hashpassword
        })

        return res.status(201).json({ message: "New user registered successfully" });
    } catch (e) {
        if (!res.headersSent) {
            return res.status(500).json({ message: "Internal Server Error" });
        }

    }
}

const LoginValidation = async (req, res) => {
    dotnet.config();

    const { username, password } = req.body.value;
    

    try {
        const result = await student.findOne({ username: username })
        
        if (result) {
            const isCompare = bcrypt.compare(password, result.password)

            if (!isCompare) {
                return res.status(401).json({ message: "password incorrect!" })
            }

            const jwtToken = jwt.sign({ username: result.username ,name:result.name}, process.env.SECRETE, { expiresIn: "24h" })

            res.cookie('token', jwtToken, {
                httpOnly: true,
                secure: false, // ❗Use true only on HTTPS (e.g. production)
                sameSite: 'Lax', // Or 'Strict'/'None' depending on your setup
                maxAge: 24 * 60 * 60 * 1000
            });
            return res.json({ message: "login successful" });
        }
        else {
            return res.status(404).json("Wrong Email")
        }


    } catch (error) {
        return res.status(501).json({ message: "Internal Server Error" });


    }
}

const ReqCourse=async (req,res,next)=>{
   
    try{
        const result = await course.find({},{title:1,author:1,price:1,Desc:1,points:1,id:1,thumbnail:1});
        
        if(!result){
            res.status(501).json({message:"Internal Server Error"});
        }
        req.Mydata=result

        next();
    }catch(e){
        console.log(e);
    }

}

const Lectures=async (req,res,next)=>{
    
    try{
        const result =await course.findOne({"_id":Object(req.headers.id)});
        
        if(!result){
            return res.status(500).json({message:"Internal Server Error"});
        }
        return res.status(201).json({message:"Data retrived Successful",data:result});
        

    }catch(e){
        console.log(e)
    }
}

const studentInfo=async (req,res)=>{
    
    const name=req.myData['name'];
 
   try {
    const result = await student.findOne({ name: name }, { name: 1, courses: 1 });
    

    res.status(201).json({
        message: "Successfully data retrieved",
        data: result
    });

    } catch (e) {
    console.error(e);
    return res.status(500).json({
        message: "Server error occurred",
        error: e.message
    });
    
}
}


const addCourses=async (req,res,next)=>{
    const {author,id,title,user,img}=req.body;
    
    try{
        const result=await student.findOne({name:user,"courses.author":author,"courses.Cid":id});
        if(result){
            console.log(result);
            return res.status(400).json({message:"Course Alerady Purchased"})
        }
        const result2=await student.updateOne({name:user},{$push:{courses:{Cid:id,author:author,title:title,thumbnail:img}}});
        if(!result2){
            return res.status(500).json({message:"Internal Server Error"})
        }
        return res.status(200).json({message:"Course added successfuly"});



    }catch(error){
        console.error(error);
    }
   
}


const updateStudent=async (req,res,next)=>{
    const {name}=req.myData;
    const {value}=req.body;
    
    try{
        const hashpassword = await bcrypt.hash(value.password, 10);

        await student.updateOne({name:name},{$set:{name:value.name,username:value.username,password:hashpassword}});

        
        return res.status(200).json({message:"Update Successfull"});


    }catch (e){
         if (!res.headersSent) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }


}


export { registration, LoginValidation,ReqCourse,studentInfo,updateStudent,Lectures ,addCourses}