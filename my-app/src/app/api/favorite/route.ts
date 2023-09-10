import prisma from "@/../../lib/prisma";
import { NextRequest } from "next/server";
import { parse } from "path";
export const POST = async (req: NextRequest) => { 
   const res =new  Response
    const {searchParams} = new URL (req.url)
    const iduser  = searchParams.get("IdUser") 
   const UserId = iduser ? parseInt(iduser, 10) : -1
   const idproduct = searchParams.get("IdProduct")
   const productId = idproduct ? parseInt(idproduct, 10) : -1
  try {
  if(UserId===-1||productId===-1){ return new Response(JSON.stringify("error params"))}
   else
   {const FAVORITE = await prisma.favorites.create({
    data: {
        userId: UserId,
    productId: productId,
    },
  })
  if (!FAVORITE) return new Response(JSON.stringify({ message: "Failed to create favorite" }));
  return new Response(JSON.stringify({ message: "favorite created successfully" }),{status:201});


}
 

  } 
  catch(error){
       return new Response(JSON.stringify(error),{status:405})

  }

}
export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const iduser = searchParams.get("IdUser");
    const UserId = iduser ? parseInt(iduser, 10) : -1;
  
    try {
      if (UserId === -1) {
        return new Response(JSON.stringify({ error: "Invalid params" }), {
          status: 400,
        });
      }
  
      const fav = await prisma.favorites.findMany({
        where: {
          userId: UserId,
        },
      });
  
      const productIds = fav.map((e) => e.productId);
  
      const products = await prisma.product.findMany({
        where: {
          id: {
            in: productIds,
          },
        },
      });
  
      return new Response(JSON.stringify({ data: products }), 
      { status: 200});
    } catch (err) {
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500 });
    }
  };
  
    
