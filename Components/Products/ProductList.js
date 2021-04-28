import React from "react";
import Link from "next/link";
import Product from "./Product";

function ProductList({ products }) {
  if (!products) return null;
  // console.log("product List >> ", products);
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.permalink}`}>
            <a>
              <Product {...product} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
