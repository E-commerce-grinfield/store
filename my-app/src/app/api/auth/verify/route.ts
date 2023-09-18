import { JwtPayload, verify } from "jsonwebtoken"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
interface MyJwtPayload extends JwtPayload {
    userId: string; 
}
export const GET = async () => {

    const cookieStore = cookies()
    const token = cookieStore.get("jwt")
    if (!token) {
        return NextResponse.json(
            {
                message: "Unauthorizde"
            },
            {
                status: 401

            })

    }
    const  access= process.env.ACCESS_TOKEN_SECRET || ""
    try{
        
 const decodedToken =verify(token.value,access) as MyJwtPayload
 
 
 

 return NextResponse.json(
    {
        user: "access granted",
        tokeninfo : decodedToken.userId
    },
    {
        status: 201

    })
  
    }
    catch (err){
        return NextResponse.json(
            {
                message: "not user "
            },
            {
                status: 201
        
            })
          

    }




}