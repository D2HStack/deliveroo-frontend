import React from "react";
import pointToComma from "../functions/pointToComma";

function SelectedMeal({ selectedMeals, setSelectedMeals, index }) {
  // const { selectedMeals, setSelectedMeals, index } = props;
  return (
    <>
      <li className="selected-meal-container">
        {selectedMeals[index].quantity > 0 ? (
          <div className="selected-meal-information">
            <div className="selected-meal-quantity-title">
              <div className="selected-meal-quantity">
                <i
                  className="fas fa-minus-circle icon-blue"
                  onClick={() => {
                    const selectedMealsCopy = [...selectedMeals];
                    if (selectedMealsCopy[index].quantity === 1) {
                      selectedMealsCopy.splice(index, 1);
                    } else {
                      selectedMealsCopy[index].quantity =
                        selectedMealsCopy[index].quantity - 1;
                    }
                    setSelectedMeals(selectedMealsCopy);
                  }}
                ></i>
                <span> {selectedMeals[index].quantity} </span>
                <i
                  className="fas fa-plus-circle icon-blue"
                  onClick={() => {
                    const selectedMealsCopy = [...selectedMeals];
                    selectedMealsCopy[index].quantity =
                      selectedMealsCopy[index].quantity + 1;
                    setSelectedMeals(selectedMealsCopy);
                  }}
                ></i>
              </div>
              <span className="selected-meal-title">
                {selectedMeals[index].title}
              </span>
            </div>
            <span className="selected-meal-price">
              {pointToComma(selectedMeals[index].price)} €
            </span>
          </div>
        ) : (
          ""
        )}
      </li>
    </>
  );
}

export default SelectedMeal;
