import RegisterModel from "../Model/FormRegistration.js";
import sendEmail from '../Mail/Send.js'
const RegisterForm=async(req,res)=>{
   try {
      const register=await RegisterModel.create(req.body.values);
        if(register._id){
         
         sendEmail(register.email,"Register SuccessFully","done",{...register});
   
        }
    res.status(201).send({message:"Form is Submitted",success:true,data:register});
   } catch (error) {

      res.status(500).send({message:"error While Register",success:false});
    
   }
}


export default {RegisterForm};