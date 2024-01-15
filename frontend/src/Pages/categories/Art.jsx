import React from "react";
import art_list from "../../Components/Assets/Categories/Art";
import Item from "../../Components/Items/Item";

const Art = () => {
  return (
    <div>
      <div className="popular-item">
        {art_list.map((item, i) => {
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

export default Art;
