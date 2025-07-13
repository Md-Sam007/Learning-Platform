import Joi from "joi";
import jwt from "jsonwebtoken";

const validation = (req, res, next) => {
    
  
    const value = req.body.value
    

    const schema = Joi.object({
        name: Joi.string().min(2),
        username: Joi.string().email().min(4).required(),
        password: Joi.string().alphanum().min(6).max(20).required()
    })

    const {error} = schema.validate(value);
    
    


    if (error) {
      console.log(error)
        return res.status(400).json({ message: `Validation Error ${error.details[0].message}` })
    }
    

    next();

}

const auth=(req,res,next)=>{
    
  
     const token =req.cookies.token;
     
     
     
      if(!token) return res.status(401).json({message:"unautherised access"});
    
      try{
        const decode=jwt.verify(token,process.env.SECRETE)
        req.user=decode;
        if(req.headers['log']){
          return res.status(201).json({message:"Login Successfull",user:req.user.name})
        }
        req.myData=req.user;
     
        
        
      }catch(e){
        console.log(e)
      }
      next();

}


const logout=(req,res,next)=>{
  res.clearCookie('token');
  res.status(200).json({message:"Logged out Successfully."})

}


export { validation ,auth ,logout}