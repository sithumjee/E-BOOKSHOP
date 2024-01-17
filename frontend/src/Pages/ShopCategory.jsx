import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Items/Item";

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  // Filter products based on the category of the page
  const filteredProducts = all_product.filter(
    (product) => product.category === props.category
  );
  return (
    <div className="mainCategory">
      <div className="shopcategory-index">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img alt="" />
        </div>
      </div>

      <div className="shopcategory-product">
        {filteredProducts.map((product, index) => (
          <Item
            key={index}
            id={product.id}
            name={product.name}
            Author_Name={product.Author_Name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>

      <div className="loadMore">
        <button>Load More</button>
      </div>
    </div>
  );
}
