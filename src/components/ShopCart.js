import React from "react";

function ShopCart(props) {
  // const {} = props;
  return (
    <>
      <button className="shopcart-button">Valider mon panier</button>
      <div className="shopcart-details-container">
        <p className="shopcart-message">Votre panier est vide</p>
      </div>
    </>
  );
}

export default ShopCart;
