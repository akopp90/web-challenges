import { products } from "@/services/productServices";

export default function handler(req, res) {
  const { id } = req.query;

  const product = products.find((product) => product.id === id);

  if (!product) {
    res.status(404).json({ status: "Not Found!" });
  }

  res.status(200).json(product);
}
