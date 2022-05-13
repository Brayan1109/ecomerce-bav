import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import back from "../img/back.png";
import cart from "../img/cart.png";

const ProtectPages = () => {
  const navigator = useNavigate();

  if (localStorage.getItem("access")) {
    return (
      <div>
        <div className="navigator-cart">
          <Link to="/shop/cart">
            {" "}
            <img src={cart} alt="" />
          </Link>
        </div>

        <div className="button-back">
          <img onClick={() => navigator(-1)} src={back} alt="" />
        </div>
        <div>
          <Outlet />;
        </div>
      </div>
    );
  } else {
    return <Link to="/login">Ir a Login</Link>;
  }
};

export default ProtectPages;
