import React from "react";
import Meal from "./Meal";
import ShopCart from "./ShopCart";

function Category(props) {
  const { name, meals } = props;
  console.log("meals", meals);

  return (
    <>
      <p className="category-title">{name}</p>
      <div>
        <Meal meal={meals[0]}></Meal>
      </div>
    </>
  );
}

export default Category;
