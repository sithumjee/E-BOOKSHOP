import React from "react";
import business_list from "../../Components/Assets/Categories/Business";
import Item from "../../Components/Items/Item";

const Business = () => {
  return (
    <div>
      <div className="popular-item">
        {business_list.map((item, i) => {
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

export default Business;
