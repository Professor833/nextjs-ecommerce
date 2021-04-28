import React from "react";
import Layout from "../Components/Layouts/Layout";
import commerce from "../utils/commerce";
// import Product from "../Components/Products/Product";
import ProductList from "../Components/Products/ProductList";
import CategoryList from "../Components/Category/CategoryList";

function Shop({ merchant, categories, products }) {
  return (
    <React.Fragment>
      <Layout>
        <h1>{merchant.business_name}'s Online Store </h1>
        <br />
        <h3>Categories</h3>
        <CategoryList categories={categories} />
        <br />
        <ProductList products={products} />
      </Layout>
    </React.Fragment>
  );
}

export default Shop;

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}
