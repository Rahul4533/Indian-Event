
import mongoose from "mongoose";

const RegisterSchema = mongoose.Schema({
    bookdate:{
        type: Date,
        required: true
    },
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true

    },
    date:{
        type: Date,
        required: true
    }
    ,
    phone:{
        type: Number,
        required: true
       
    },
    aadhar:{
        type: Number,
        required:true
    },
    father:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    programaddress:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    advanceamount:{
        type: Number,
        required: true
    },
    restamount :{
       type: Number,
       required: true
    },
    Date:{
        type:Array,
        required:true
    }

},{timestamps: true })

const RegisterModel= mongoose.model('ClientData',RegisterSchema);

export default RegisterModel;