import React from "react";
import Meal from "./Meal";

function Category({ name, meals, selectedMeals, setSelectedMeals }) {
  // const { name, meals, selectedMeals, setSelectedMeals } = props;
  // console.log("meals", meals);

  return (
    <>
      <p className="category-title">{name}</p>
      <div className="meals">
        {meals.map((meal, index) => {
          return (
            <li key={meal.title} className="meal">
              <Meal
                meal={meal}
                selectedMeals={selectedMeals}
                setSelectedMeals={setSelectedMeals}
              ></Meal>
            </li>
          );
        })}
      </div>
    </>
  );
}

export default Category;
