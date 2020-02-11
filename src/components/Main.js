import React from "react";
import Category from "./Category";
import ShopCart from "./ShopCart";

function Main(props) {
  const { categories, selectedMeals, setSelectedMeals } = props;

  // console.log("categories", categories);
  return (
    <>
      <div className="bg-main">
        <div className="main-container">
          <div>
            {categories.map((category, index) => {
              return category.meals.length > 0 ? (
                <div key={category.name}>
                  <Category
                    className="category-container"
                    selectedMeals={selectedMeals}
                    setSelectedMeals={setSelectedMeals}
                    {...category}
                  ></Category>
                </div>
              ) : (
                ""
              );
            })}
          </div>

          <ShopCart
            selectedMeals={selectedMeals}
            setSelectedMeals={setSelectedMeals}
          ></ShopCart>
        </div>
      </div>
    </>
  );
}

export default Main;
