import React from "react";
import adventure_list from "../../Components/Assets/Categories/Adventure";
import Item from "../../Components/Items/Item";

const Adventure = () => {
  return (
    <div>
      <div className="popular-item">
        {adventure_list.map((item, i) => {
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

export default Adventure;
