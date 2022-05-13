import React from "react";
import { Link } from "react-router-dom";

const Pay = () => {
  return (
    <div className="container-pages-cart">
      <h3>Su pago ha sido exitoso</h3>
      <p>Lo invitamos a seguir comprando nuestros productos</p>

      <Link to="/shop"> Seguir comprando </Link>
    </div>
  );
};

export default Pay;
