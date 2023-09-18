import prisma from "@/../../lib/prisma";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { name, price, category, description, image } = body;
    const IntPrice = parseFloat(price);
    const Products = await prisma.product.create({
      data: {
        name: name,
        price: IntPrice,
        category: category,
        description: description,
        image: image,
      },
    });
    if (!Products)
      return new Response(
        JSON.stringify({ message: "Failed to create product" })
      );
    return new Response(
      JSON.stringify({ message: "Product created successfully" })
    );
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};
export const GET = async () => {
  try {
    const Products = await prisma.product.findMany();
    if (!Products)
      return new Response(
        JSON.stringify({ message: "Failed to create product" })
      );
    return new Response(JSON.stringify(Products));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};
export const PUT = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("ID");
  const productId = id ? parseInt(id, 10) : undefined;
  try {
    const body = await req.json();
    const { name, price, category, description, image } = body;
    const IntPrice = parseFloat(price);
    const Products = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name: name,
        price: IntPrice,
        category: category,
        description: description,
        image: image,
      },
    });
    if (!Products)
      return new Response(
        JSON.stringify({ message: "Failed to update product" })
      );
    return new Response(JSON.stringify(Products));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};
export const DELETE = async (req: Request) => {
  try {
    // Get the product ID from the request parameters
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("ID");
    const productId = id ? parseInt(id, 10) : undefined;

    // Delete the product from the database using Prisma
    const deletedProduct = await prisma.product.delete({
      where: { id: productId },
    });

    if (!deletedProduct) {
      // Handle case where the product with the given ID was not found
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Product deleted successfully" })
    );
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
