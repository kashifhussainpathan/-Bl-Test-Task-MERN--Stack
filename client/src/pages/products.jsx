import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/productCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/products");
    const products = response?.data?.data;

    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section>
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
};

export default Products;
