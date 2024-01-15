import React from "react";
import religion_list from "../../Components/Assets/Categories/Religion";
import Item from "../../Components/Items/Item";

const Religion = () => {
  return (
    <div>
      <div className="popular-item">
        {religion_list.map((item, i) => {
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

export default Religion;
