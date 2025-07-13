import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    courses:Array
    
});

const student = mongoose.model("student", studentSchema); 


const courseSchema= new mongoose.Schema({
    title:String,
    price:String,
    author:String,
    lecture:Array,
    thumbnail:String,
    Desc:String,
    points:Array
})

const course=mongoose.model("course",courseSchema);

    
export { student,course };
