import React from "react";
// import styles from "../../styles/products.module.css";
function Product({ name, price, assets, description }) {
  return (
    <React.Fragment>
      <div>
        <div className="imgContainer">
          {assets.map((asset) => (
            <img
              key={asset.id}
              src={asset.url || ""}
              alt="Product Image"
              style={{ height: "100%", width: "100%" }}
            />
          ))}
        </div>
        <h2>Name : {name}</h2>

        <h4>
          Description :
          <div
            className="_description"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </h4>
        <h4>Price: {price.formatted_with_symbol}</h4>
        <br />
      </div>
    </React.Fragment>
  );
}

export default Product;
