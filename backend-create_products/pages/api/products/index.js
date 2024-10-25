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

      response.status(200).json({
        status:
          "<Image src={'https://http.cat/200'} width={300px} height={300px}/> success!",
      });
      return;
    } catch (error) {
      console.error(error);
      response.status(400).json({
        error:
          "<Image src={'https://http.cat/400'} width={300px} height={300px}/>" &
          error.message,
      });
      return;
    }
  }

  response.status(405).json({
    status:
      "<Image src={'https://http.cat/405'} width={300px} height={300px}/> Method not allowed.",
  });
}
