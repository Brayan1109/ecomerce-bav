import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cardProduct.css";

const CardProduct = ({ obj }) => {
  const [numImage, setImage] = useState(0);
  const navigator = useNavigate();

  return (
    <div className="card-product" onClick={() => navigator(`/shop/${obj.id}`)}>
      <h4>{obj.name}</h4>
      <img
        onMouseMove={() => setImage(1)}
        onMouseOut={() => setImage(0)}
        src={obj.images[numImage].url}
        width="200px"
        alt=""
      />
      <h5>{obj.price}</h5>
    </div>
  );
};

export default CardProduct;
