import React, { useContext } from "react";
import "./CSS/Product.css";

import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import GetProductId from "../Components/GetProductId/GetProductId";
import ProductDisplay from "../Components/ProductDispaly/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));

  return (
    <div className="main-product">
      <GetProductId product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts allProducts={all_product} currentProduct={product} />
    </div>
  );
}
