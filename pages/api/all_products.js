import axios from "axios";
import commerce from "../../utils/commerce";

export default async function handler(req, res) {
  const { limit } = req.query;
  let products;
  if (limit) {
    products = await commerce.products.list({ limit });
    // console.log("producst >> ", products);
    const { data: all_products } = products;
    return res.status(200).send(all_products);
  }

  products = await commerce.products.list();
  const { data: all_products } = products;
  return res.status(200).send(all_products);
}
