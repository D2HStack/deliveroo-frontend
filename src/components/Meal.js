import React from "react";

function Meal(props) {
  const { meal } = props;
  console.log(meal);

  const formatPrice = price => {
    const priceComma = price.replace(".", ",");
    return priceComma + " euros";
  };

  return (
    <>
      <div className="meal-container">
        <div className="meal-information">
          <p className="meal-title">{meal.title}</p>
          <p className="meal-description">{meal.description}</p>
          <div className="meal-price-pop">
            <span className="meal-price">{formatPrice(meal.price)}</span>
            <span className="meal-populaire">
              {meal.popular && "Star Populaire"}
            </span>
          </div>
        </div>
        <img className="meal-img" rel={meal.title} src={meal.picture}></img>
      </div>
    </>
  );
}

export default Meal;
