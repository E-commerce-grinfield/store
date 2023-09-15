    const bcrypt =require("bcrypt")

    import { error, log } from "console";
    import prisma from "../../../../lib/prisma";
    export const POST = async  (req: Request) =>{
        const body =  await req.json();
        const {email ,password} = body
        console.log(body)
        try{
            const user =await prisma.user.findFirst({
                where: {
                email :email,
                },
            
            })
            console.log(user);
            if(!user) {
                console.log("hi");
                
                return new Response(JSON.stringify({message:"wrong email"}))}
            //compare password1
            
            else {
            bcrypt.compare(password, user.password, async function (err :any, auth :boolean) {
                if (err) {
                    console.log(err,"the err");
                    
                return new  Response (JSON.stringify(err))
                }
    
                if (auth) {
                
                    return new  Response (JSON.stringify({message :"successfuly logged in "}));
                } else {
                    return new  Response (JSON.stringify({message :"wrong password "}))
            }})}
    






        }
        catch(e){console.log(e)}
















    }