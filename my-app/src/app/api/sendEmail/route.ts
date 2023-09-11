import nodemailer from "nodemailer"
import { NextResponse } from "next/server"


export async function POST(request:Request , response : Response){
    try{
    const {name , email, number , message }= await request.json()
    const transporter = nodemailer.createTransport({
        service : "zoho",
        host : "root" , 
        port : 3000 ,
        secure : true , 
        auth : {

            user : "oubaidbensaid18@gmail.com",
            pass : process.env.NEXT_PUBLIC_PASSWORD 
        }
    })


const mailOptions = {
    from : "oubaidbensaid18@gmail.com",
    to : email,
    subject : "subject",
    text : `Hello ${name},\n\nYour message: ${message}` 
}

await transporter.sendMail(mailOptions)

return NextResponse.json({message:"Email sended"},{ status:200})
 }catch(error){
    return NextResponse.json({message : "failed to send "}),
    {status:500}
 }

}


 