import React from "react";
import "./Popular.css";
import Item from "../../Items/Item";
import popular_books from "../../Assets/PopularBooks";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR BOOKS</h1>
      <div className="popular-item">
        {popular_books.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              Author_Name={item.Author_Name}
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

export default Popular;
