import express from "express";
import dotenv from 'dotenv'
import connectDB from "./Config/Db.js";
const app=express();
dotenv.config();
connectDB();




   




app.listen(8080,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server is running on Port 8080")
})