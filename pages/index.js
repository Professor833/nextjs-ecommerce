import React from "react";
import { Button, Alert } from "reactstrap";
import Layout from "../Components/Layouts/Layout";
import axios from "axios";
import Link from "next/link";

function Index() {
  axios
    .get("http://localhost:1337/restaurants")
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log("ERROR WHILE GETTING DATA >> ", e);
    });

  return (
    <Layout>
      <div>
        <Alert color="primary">
          Hello Project is strapi-next with Bootstrap
        </Alert>
        &nbsp; <Button color="primary">Hello from nextjs</Button>
        <h1>Go to Shop </h1>
        <Link href="/shop">
          <Button color="primary">Shop</Button>
        </Link>
        <h1>Wnt to check nearby Vaccination Centers? </h1>
        <Link href="/near-by-vaccination-centeres">
          <Button color="primary">Click Here</Button>
        </Link>
      </div>
    </Layout>
  );
}

export default Index;
