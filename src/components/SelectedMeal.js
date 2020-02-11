import React from "react";

function SelectedMeal(props) {
  const { selectedMeals, setSelectedMeals, index } = props;
  return (
    <>
      <div>
        {selectedMeals[index].quantity > 0 ? (
          <li>
            <i
              className="fas fa-minus-circle"
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

            <span>{selectedMeals[index].quantity}</span>
            <i
              className="fas fa-plus-circle"
              onClick={() => {
                const selectedMealsCopy = [...selectedMeals];
                selectedMealsCopy[index].quantity =
                  selectedMealsCopy[index].quantity + 1;
                setSelectedMeals(selectedMealsCopy);
              }}
            ></i>

            <span>{selectedMeals[index].title}</span>
          </li>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SelectedMeal;
