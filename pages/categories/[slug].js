import commerce from "../../utils/commerce";
import ProductList from "../../Components/Products/ProductList";
import React from "react";
import Layout from "../../Components/Layouts/Layout";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const { slug } = params;
  //   console.log("**************** \nslug\n *************", slug);

  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  });

  return {
    props: {
      category,
      products,
    },
  };
}

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export default function CategoryPage({ category, products }) {
  return (
    <Layout>
      <h1>
        <Link href="/shop"> Shop</Link>
      </h1>
      <h1>{category.name}</h1>

      <ProductList products={products} />
    </Layout>
  );
}
