import React from "react";
import "./Latest.css";
import New_books from "../../Assets/NewArrivals";
import Item from "../../Items/Item";

const Latest = () => {
  return (
    <div className="latest">
      <h1>NEW ARRIVALS</h1>
      <div className="popular-item">
        {New_books.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Latest;
