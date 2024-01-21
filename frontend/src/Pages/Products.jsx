import React, { useContext } from "react";
import "./CSS/Product.css";

import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import GetProductId from "../Components/GetProductId/GetProductId";
import ProductDisplay from "../Components/ProductDispaly/ProductDisplay";

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));

  // Add conditional rendering to handle potential null or undefined product
  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  return (
    <div className="main-product">
      {/* <GetProductId product={product} /> */}
      <ProductDisplay product={product} />
    </div>
  );
}
