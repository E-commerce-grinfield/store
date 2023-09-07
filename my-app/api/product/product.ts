import {prisma} from "../../lib/prisma";


export const createProduct = async (productData:any) => {
  try {
    const newProduct = await prisma.product.create({
      data: {
        name: productData.name,
        price: productData.price,
        category: productData.category,
        description: productData.description,
        image: productData.image,
      },
    });

    return newProduct;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};



