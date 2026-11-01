import { ShoppingBag } from "lucide-react";
import "./ProductsSection.css";

function ProductsSection() {
  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <div>
          <span className="eyebrow">SHOP MORE INTELLIGENTLY</span>
          <h2>Discover your options</h2>
          <p>Explore the products that could become part of your routine.</p>
        </div>
        <span className="coming-soon">PRODUCT CATALOGUE</span>
      </div>

      <div className="product-placeholder">
        <div className="product-placeholder-icon">
          <ShoppingBag size={25} />
        </div>
        <h3>Your skincare discovery starts here.</h3>
        <p>
          Our product catalogue and recommendation engine will appear here once
          connected.
        </p>
      </div>
    </section>
  );
}

export default ProductsSection;
