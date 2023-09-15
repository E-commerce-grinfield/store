import prisma from "@/../../lib/prisma";
import { error } from "console";
import { NextResponse } from "next/server";
export const GET  = async (req : Request) => {
    const {searchParams} = new URL (req.url)
    const idproduct = searchParams.get("IdProduct")
   const productId = idproduct ? parseInt(idproduct, 10) : -1
   console.log("🚀 ~ file: route.ts:8 ~ GET ~ productId:", productId)
   
   
   try{ 
    
   
    
    const product = await prisma.product.findFirst({where: { id :productId}})
    console.log("🚀 ~ file: route.ts:16 ~ GET ~ product:", product)


    if(product===null)  return NextResponse.json({error:"product not found"},{status:401})

     return NextResponse.json({product:product},{status:201})



}
   
   
  catch (err){
  console.log("🚀 ~ file: route.ts:12 ~ GET ~ err:", err)
 return NextResponse.json({ error: err }, { status: 500 })

    
  }

   
}