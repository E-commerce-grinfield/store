import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
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
        
 verify(token.value,access)

 return NextResponse.json(
    {
        user: "access granted"
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