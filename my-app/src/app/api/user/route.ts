const bcrypt =require("bcrypt")

import prisma from "../../../../lib/prisma";
export const POST = async  (req: Request) =>{
   
  try {
    const body =  await req.json();
    console.log(body);
    
    const {email ,name,password,role,lastname,status} = body
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
    const {email ,name,password,role} = body
  try{
    if (!id){return new Response('not found')}

   


    const updateUser = await prisma.user.update({
      where: {
         id :userId
      },
      data: {
        name: name,
        email: email,
        password: password,
        role: role, 
      },
    })
    return new Response(JSON.stringify(updateUser))
}
catch(err){
  new Response(JSON.stringify(err))
}} 
