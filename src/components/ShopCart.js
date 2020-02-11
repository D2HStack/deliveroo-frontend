import React from "react";
import SelectedMeal from "./SelectedMeal";

function ShopCart(props) {
  const { selectedMeals, setSelectedMeals } = props;

  let isSelectedMeals = selectedMeals.length > 0;
  let subTotal = 0;
  const deliveryFees = 2.5;

  return (
    <>
      <button className="shopcart-button">Valider mon panier</button>
      <div className="shopcart-details-container">
        {isSelectedMeals ? (
          <div>
            <ul>
              {selectedMeals.map((meal, index) => {
                subTotal = subTotal + Number(meal.price) * meal.quantity;
                return (
                  <div key={meal.title}>
                    <SelectedMeal
                      index={index}
                      selectedMeals={selectedMeals}
                      setSelectedMeals={setSelectedMeals}
                    ></SelectedMeal>
                  </div>
                );
              })}
            </ul>
            <hr></hr>
            <p>Sous-total</p>
            <span>{subTotal}</span>
            <p>Frais de livraison</p>
            <span>{deliveryFees}</span>
            <hr></hr>
            <p>Total</p>
            <span>{subTotal + deliveryFees}</span>
          </div>
        ) : (
          "Votre panier est vide"
        )}
      </div>
    </>
  );
}

export default ShopCart;
