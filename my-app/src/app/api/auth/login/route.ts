 require('dotenv').config() 
import prisma from "../../../../../lib/prisma"   ;
import { NextResponse, NextRequest } from 'next/server';
const bcrypt =require("bcrypt")
import jwt from 'jsonwebtoken';
import { serialize } from "cookie";


export const POST =  async (req: NextRequest) => {
   
   
   
   try {
    
    const { email, password } = await req.json();
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    
    if (!user) {
      return NextResponse.json({ message: 'Wrong email' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const  access= process.env.ACCESS_TOKEN_SECRET
        if(!access) {throw new Error("erro no access token")}
      const token = jwt.sign({ userId: user.id },access, { expiresIn: '1h' });

    
    const serialized = serialize("jwt",token,{
      httpOnly :true ,
      secure : false ,
      sameSite : "strict" ,
      path : "/"
    }


    )







      return NextResponse.json({ message: 'Successfully logged in'},{status:200 , headers : {"Set-Cookie":serialized}});
    } else {
      return NextResponse.json({ message: 'Wrong password' });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
};





      
      
      
      
      
      