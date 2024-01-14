import React from "react";
import health_list from "../../Components/Assets/Categories/Health";
import Item from "../../Components/Items/Item";

const Health = () => {
  return (
    <div>
      <div className="popular-item">
        {health_list.map((item, i) => {
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

export default Health;