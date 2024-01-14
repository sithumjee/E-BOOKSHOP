import React from "react";
import mystery_list from "../../Components/Assets/Categories/Mystery";
import Item from "../../Components/Items/Item";

const Mystery = () => {
  return (
    <div>
      <div className="popular-item">
        {mystery_list.map((item, i) => {
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

export default Mystery;
