import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";

import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="images/home-favicon.png" />
      <title>E-commerce Project</title>
      <Header cart={cart} />
      <ProductsGrid products={products} loadCart={loadCart} />
    </>
  );
}
