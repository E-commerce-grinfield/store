const bcrypt =require("bcrypt")

import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { hash } from "bcrypt";
export const POST = async  (req: Request) =>{
   
  try {
    const body =  await req.json();
    console.log(body);
    
    const {email ,name,password,role,lastname,status,address} = body
    const user = await prisma.user.findFirst({
      where: {
        email: email
      },
    })
    const Intstatus = Number(status)
    if (user?.email) return new Response(JSON.stringify({message:" email allready exist !"}))
    console.log(body);
    const salt = await bcrypt.genSalt(10);
    var hashedpassowrd = await bcrypt.hash(password, salt)
    const newData = await prisma.user.create({
      data: { 
        name: name,
        lastName:lastname,
        email: email,
        password: hashedpassowrd,
        role: role, 
        status:Intstatus,
        address:address
      },
    });
    if(!newData) return new Response(JSON.stringify({newData:"no"}))
    return new Response(JSON.stringify({newData})) 
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error))
  }
}
export const PUT =async (req : Request) => {
  const {searchParams} = new URL (req.url)
  const id = searchParams.get("ID")
 const userId = id ? parseInt(id, 10) : undefined
  const body =  await req.json();
    const {email ,name,lastName,password,address} = body
  try{
    if (!id){return new Response('not found')}

    const salt = await bcrypt.genSalt(10);
    var hashedpassowrd = await bcrypt.hash(password, salt)


    const updateUser = await prisma.user.update({
      where: {
         id :userId
      },
      data: {
        name: name,
        email: email,
        password: hashedpassowrd,
        lastName:lastName,
        address:address   
      },
    })
    return new Response(JSON.stringify(updateUser))
}
catch(err){
  new Response(JSON.stringify(err))
}} 
export const GET =async (req:Request) => {
  const {searchParams}= new URL(req.url)
  const iduser = searchParams.get("ID")
  const userId = iduser ? parseInt(iduser, 10) : -1
  console.log("🚀 ~ file: route.ts:73 ~ GET ~ userId:", userId)
  
  try{ 
    
   
    
    const User = await prisma.user.findUnique({where: { id :userId}})
    console.log("👌 ~ file: route.ts:80 ~ GET ~ User:", User)
   


    if(User===null)  return NextResponse.json({error:"User not found"},{status:401})

     return NextResponse.json({User:User},{status:201})



}
   
   
  catch (err){
  console.log("🚀 ~ file: route.ts:12 ~ GET ~ err:", err)
 return NextResponse.json({ error: err }, { status: 500 })

    
  }
}
