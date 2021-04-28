import commerce from "../../utils/commerce";
import Product from "../../Components/Products/Product";
import React from "react";
import Layout from "../../Components/Layouts/Layout";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const { permalink } = params;
  // console.log("**************** \nslug\n *************", permalink);

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {
  return (
    <Layout>
      <h1>
        <Link href="/shop"> Shop</Link>
      </h1>
      <h1>{product.name}</h1>
      <Product {...product} />
    </Layout>
  );
}
