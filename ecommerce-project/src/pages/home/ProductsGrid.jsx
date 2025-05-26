import { Product } from "./Product";
import "./ProductsGrid.css";

export function ProductsGrid({ products, loadCart }) {
  return (
    <div className="home-page">
      <div className="products-grid">
        {products.map((product) => {
          return (
            <Product key={product.id} product={product} loadCart={loadCart} />
          );
        })}
      </div>
    </div>
  );
}
