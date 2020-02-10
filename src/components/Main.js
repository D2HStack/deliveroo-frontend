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
          <div className="category-container">
            <Category
              name={categories[0].name}
              meals={categories[0].meals}
            ></Category>
          </div>
          <div className="shop-cart-container">
            <ShopCart></ShopCart>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
