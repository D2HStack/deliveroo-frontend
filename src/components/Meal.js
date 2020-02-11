import React from "react";
import lodash from "lodash";
import pointToComma from "../functions/pointToComma";

function Meal(props) {
  const { meal, selectedMeals, setSelectedMeals } = props;
  // console.log(meal);

  return (
    <>
      <div
        key={meal.title}
        className="meal-container"
        onClick={() => {
          const selectedMealsCopy = [...selectedMeals];
          const index = lodash.findIndex(selectedMealsCopy, item => {
            return item.title === meal.title;
          });
          if (index === -1) {
            const selectedMeal = { ...meal };
            selectedMeal.quantity = 1;
            selectedMealsCopy.push(selectedMeal);
          } else {
            selectedMealsCopy[index].quantity =
              selectedMealsCopy[index].quantity + 1;
          }
          setSelectedMeals(selectedMealsCopy);
        }}
      >
        <div
          className={
            meal.picture ? "meal-information" : "meal-information-wide"
          }
        >
          <p className="meal-title">{meal.title}</p>
          {meal.description !== "" ? (
            <p className="meal-description">{meal.description}</p>
          ) : (
            ""
          )}
          <div className="meal-price-pop">
            <div className="meal-price">
              <span>{pointToComma(meal.price)} €</span>
            </div>
            {meal.popular && (
              <div className="meal-popular">
                <i className="fas fa-star"></i>
                <span> Populaire</span>
              </div>
            )}
          </div>
        </div>
        {meal.picture && (
          <img
            alt={meal.title}
            className="meal-img"
            rel={meal.title}
            src={meal.picture}
          ></img>
        )}
      </div>
    </>
  );
}

export default Meal;
