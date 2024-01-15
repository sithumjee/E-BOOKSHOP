import React from "react";
import philosophy_list from "../../Components/Assets/Categories/Philosophy";
import Item from "../../Components/Items/Item";

const Philosophy = () => {
  return (
    <div>
      <div className="popular-item">
        {philosophy_list.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              Author_Name={item.Author_Name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Philosophy;
