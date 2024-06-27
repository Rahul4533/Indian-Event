import express from "express";
import dotenv from 'dotenv'
import connectDB from "./Config/Db.js";
import router from "./Router/registerForm.js";
const port=8000;
const app=express();
dotenv.config();
connectDB(); 

  
//middle ware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',router);
 
   
 



app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`Server is running on Port ${process.env.PORT}`)
})  