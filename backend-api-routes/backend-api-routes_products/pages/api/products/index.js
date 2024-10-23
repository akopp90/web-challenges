import { products } from "@/services/productServices";

export default function handler(req, res) {
  res.status(200).json(products);
}
