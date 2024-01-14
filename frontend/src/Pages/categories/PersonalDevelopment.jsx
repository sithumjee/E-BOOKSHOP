import React from "react";
import selfhelp_list from "../../Components/Assets/Categories/PersonalDevelopment";
import Item from "../../Components/Items/Item";

const PersonalDevelopment = () => {
  return (
    <div>
      <div className="popular-item">
        {selfhelp_list.map((item, i) => {
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

export default PersonalDevelopment;
