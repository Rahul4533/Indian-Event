import express from "express";
import dotenv from 'dotenv'
import connectDB from "./Config/Db.js";
import router from "./Router/registerForm.js";
import cors from 'cors'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
const port=8000;
const app=express();
dotenv.config();
connectDB(); 
const __dirname = dirname(fileURLToPath(import.meta.url));
  
//middle ware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin: "http://localhost:8000"}));

app.use('/',router);
 
   
 
app.use(express.static(path.join(__dirname, './client/build')));

// Handle all other routes by serving the 'index.html' file
app.get('*', (req, res) => {
    const index = join(__dirname, './client/build/index.html');
    res.sendFile(index);
});


app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`Server is running on Port ${port}`)
})  
