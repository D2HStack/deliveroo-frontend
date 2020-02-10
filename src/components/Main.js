import React from "react";
import Category from "./Category";
import ShopCart from "./ShopCart";

function Main(props) {
  const { categories } = props;

  console.log("categories", categories);
  return (
    <>
      <div className="bg-main">
        <div className="main-container">
          <div>
            {categories.map((category, index) => {
              return (
                <Category
                  className="category-container"
                  name={category.name}
                  meals={category.meals}
                ></Category>
              );
            })}
          </div>
          <div className="shopcart-container">
            <ShopCart></ShopCart>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
