import React from "react";
import SelectedMeal from "./SelectedMeal";
import pointToComma from "../functions/pointToComma";

function ShopCart({ selectedMeals, setSelectedMeals }) {
  // const { selectedMeals, setSelectedMeals } = props;

  let isSelectedMeals = selectedMeals.length > 0;
  let subTotal = 0;
  const deliveryFees = 2.5;

  return (
    <>
      <div className="shopcart-container">
        <button
          className={
            isSelectedMeals ? "shopcart-button-blue" : "shopcart-button-grey"
          }
        >
          Valider mon panier
        </button>
        {isSelectedMeals ? (
          <div className="shopcart-details-container">
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
            <hr className="hr"></hr>
            <div className="subtotal-container">
              <div className="subtotal-item">
                <span>Sous-total</span>
                <span>{pointToComma(subTotal)} €</span>
              </div>
              <div className="subtotal-item">
                <span>Frais de livraison</span>
                <span>{pointToComma(deliveryFees)} €</span>
              </div>
            </div>
            <hr className="hr"></hr>
            <div className="total">
              <span>Total</span>
              <span>{pointToComma(subTotal + deliveryFees)} €</span>
            </div>
          </div>
        ) : (
          <div className="empty-shopcart">
            <p>Votre panier est vide</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ShopCart;
