import React from "react";
import poetry_list from "../../Components/Assets/Categories/Poetry";
import Item from "../../Components/Items/Item";

const Poetry = () => {
  return (
    <div>
      <div className="popular-item">
        {poetry_list.map((item, i) => {
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

export default Poetry;
