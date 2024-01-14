import React from "react";
import fiction_list from "../../Components/Assets/Categories/Fiction";
import Item from "../../Components/Items/Item";

const Fiction = () => {
  return (
    <div>
      <div className="popular-item">
        {fiction_list.map((item, i) => {
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

export default Fiction;
