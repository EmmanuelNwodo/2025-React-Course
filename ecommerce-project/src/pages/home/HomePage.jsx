import { Header } from "../../components/Header";

import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart, products }) {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="images/home-favicon.png" />
      <title>E-commerce Project</title>
      <Header cart={cart} />
      <ProductsGrid products={products} />
    </>
  );
}
