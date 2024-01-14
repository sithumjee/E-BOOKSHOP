import React from "react";
import children_list from "../../Components/Assets/Categories/Children";
import Item from "../../Components/Items/Item";

const Childern = () => {
  return (
    <div>
      <div className="popular-item">
        <h1>C</h1>
        {children_list.map((item, i) => {
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

export default Childern;
