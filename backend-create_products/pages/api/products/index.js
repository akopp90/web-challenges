import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }
  if (request.method === "POST") {
    try {
      const productData = request.body;
      await Product.create(productData);

      response.status(200).json({ status: "success!" });
      return;
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
      return;
    }
  }

  response.status(405).json({ status: "Method not allowed." });
}
