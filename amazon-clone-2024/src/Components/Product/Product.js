import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css"

function Product() {
  const [products, setProducts] = useState([]); // Initialize with empty array

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  return (
    <section className={classes.products_container}>
      {products?.map((singleProduct) => (
        <ProductCard key={singleProduct.id} product={singleProduct} />
      ))}
    </section>
  );
}

export default Product;