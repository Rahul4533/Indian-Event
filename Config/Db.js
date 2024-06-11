import mongoose from "mongoose";


const connectDB=async()=>{
    try {
          await mongoose.connect(process.env.URI)
           console.log(`MongoDB Connected Success ${mongoose.connection.host}`)
        
    } catch (error) {
        
    }
}


export default connectDB;