
import nodemailer from 'nodemailer'


const transpoter=nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: 'indianevent12@gmail.com',
        pass: 'eicldmuarkopbjbo'
    }
})
 
export default transpoter;