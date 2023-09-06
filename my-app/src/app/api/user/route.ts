import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../lib/prisma";
export const POST = async  (req: NextRequest) =>{
  console.log("hiii");
  try {
    const { name, email, password, role }: any = req.body;
    console.log(name,email,password,role);
    const newData = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        role: role, 
      },
    });
    if(!newData) return NextResponse.json("error", { status: 401 });
    return NextResponse.json(newData, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error ", error });
  }
}

