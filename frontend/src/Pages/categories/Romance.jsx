import React from "react";
import romance_list from "../../Components/Assets/Categories/Romance";
import Item from "../../Components/Items/Item";

const Romance = () => {
  return (
    <div>
      <div className="popular-item">
        {romance_list.map((item, i) => {
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

export default Romance;
