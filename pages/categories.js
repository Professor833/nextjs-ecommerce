import commerce from "../utils/commerce";
import CategoryList from "../components/Category/CategoryList";
import React from "react";
export default function CategoriesPage({ categories }) {
  return (
    <React.Fragment>
      <h1>Categories</h1>
      <CategoryList categories={categories} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      categories,
    },
  };
}
