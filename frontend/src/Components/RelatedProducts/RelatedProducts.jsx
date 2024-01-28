import React from "react";
import ProductDisplay from "../ProductDispaly/ProductDisplay";

const RelatedProducts = ({ allProducts, currentProduct }) => {
  // Get related products based on the category of the current product
  const relatedProducts = allProducts.filter(
    (product) =>
      product.category === currentProduct.category &&
      product.id !== currentProduct.id
  );

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="product-list">
        {relatedProducts.map((relatedProduct) => (
          <ProductDisplay key={relatedProduct.id} product={relatedProduct} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
