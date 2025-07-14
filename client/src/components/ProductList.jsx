import { products } from "../data/products.js";
import { ProductCard } from "../components";

export const ProductList = () => {
  return (
    <section className="product_list_container">
      {products && products.length > 0 ? (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      ) : (
        <p>No product is available</p>
      )}
    </section>
  );
};
