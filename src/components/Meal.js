import React from "react";

function Meal(props) {
  const { meal } = props;
  console.log(meal);

  const formatPrice = price => {
    const priceComma = price.replace(".", ",");
    return priceComma;
  };

  return (
    <>
      <div className="meal-container">
        <div className="meal-information">
          <p className="meal-title">{meal.title}</p>
          {meal.description !== "" ? (
            <p className="meal-description">{meal.description}</p>
          ) : (
            ""
          )}
          <div className="meal-price-pop">
            <div className="meal-price">
              <span>{formatPrice(meal.price)} €</span>
            </div>
            {meal.popular && (
              <div className="meal-populaire">
                <i class="fas fa-star"></i>
                <span> Populaire</span>
              </div>
            )}
          </div>
        </div>
        {meal.picture ? (
          <img
            alt={meal.title}
            className="meal-img"
            rel={meal.title}
            src={meal.picture}
          ></img>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Meal;
