import React from "react";
import Meal from "./Meal";

function Category(props) {
  const { name, meals } = props;
  console.log("meals", meals);

  return (
    <>
      <p className="category-title">{name}</p>
      <div className="meals">
        {meals.map((meal, index) => {
          return (
            <li className="meal">
              <Meal meal={meal}></Meal>
            </li>
          );
        })}
      </div>
    </>
  );
}

export default Category;
