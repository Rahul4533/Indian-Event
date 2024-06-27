// emailService.js
import transpoter from "../Config/mail.js";

async function sendEmail(to, subject, text, register) {
    try {
      
        const {fullname,bookdate,programaddress,advanceamount}=register._doc;
           
        // Define email data
        let mailOptions = {
            from: 'indianevent12@gmail.com', // Sender address
            to: to, // Receiver's email address
            subject: subject,
            text: text,
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            background-color: #4CAF50;
            color: #ffffff;
            padding: 10px;
            text-align: center;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
        .email-body {
            padding: 20px;
            line-height: 1.6;
        }
        .email-footer {
            background-color: #f4f4f4;
            color: #777777;
            text-align: center;
            padding: 10px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }
        .button {
            display: inline-block;
            background-color: #4CAF50;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
        }
        @media (max-width: 600px) {
            .email-container {
                width: 100%;
                padding: 10px;
            }
            .button {
                display: block;
                width: 100%;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>Welcome to Our Service</h1>
        </div>
        <div class="email-body">
            <p>Dear ${fullname} </p>
            <p>Thank you for joining Indian Event Celibrity Managment. We are thrilled to have you on board.</p>
             <h3 class="justify-content-center">Here is Your  Booking Details</h3>
            <ul>
                <li>Your booking Date is ${bookdate}</li>
                <li>The Program Address is ${programaddress}</li>
                <li>Advance Amount Paid is ${advanceamount}</li>
            </ul>
            <p>If you have any questions, feel free to contact our support team No <h7> 6205419490  7258862207 </h7></a>.</p>
            <p>Best regards,<br>The Our Service Team</p>
            <a href="#" class="button">Get Started</a>
        </div>
        <div class="email-footer">
            <p>&copy; 2024 IndiansEvent. All rights reserved.</p>
            <P>Head Office:-JanaBai Smaruti Sector 19 plot no A-157 Shop No 1 KoperKhirne Navi Mumbai M.H 400709</P>
             <p>Ram Saran Complex 3rd floor Kankarbagh Main road naer by chandan Hero opposite MGM Collage Patna 800020</p>
        </div>
    </div>
</body>
</html>
`
        };

        // Send email
        let info = await transpoter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        console.log('Message ID:', info.messageId);
        return info; // Optionally return info for further handling
    } catch (error) {
        console.error('Error occurred:', error.message);
        throw error; // Throw error for caller to handle
    }
}

 export default sendEmail;
