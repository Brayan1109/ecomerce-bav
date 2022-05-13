import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productSetInfoThunk } from "../redux/actions/indexAction";
import { addProductCart } from "../services/services";
import "./productId.css";

export const ProductId = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productInfo = useSelector((state) => state.productInfo);
  const [addCart, setAddCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (addCart) {
      addProductCart({ product: params.id, quantity }).then((req) => {});
      setAddCart(false);
    }
  }, [addCart, params, quantity]);

  useEffect(() => {
    if (params.id) {
      dispatch(productSetInfoThunk(params.id));
    }
  }, [params, dispatch]);

  return (
    <div className="container-page-cart">
      <div>
        <CardInfoProduct
          info={productInfo}
          quantity={quantity}
          setAddCart={setAddCart}
          setQuantity={setQuantity}
        />
      </div>
    </div>
  );
};

const CardInfoProduct = ({ info, quantity, setQuantity, setAddCart }) => {
  return (
    <div className="container-product-cart">
      {info.images ? (
        <div className="info-card-cart">
          <h3>{info.name}</h3>
          <div className="image-card-cart">
            <img src={info.images[0].url} alt="" width="250px" />
            <img src={info.images[1].url} alt="" width="250px" />
            <img src={info.images[2].url} alt="" width="250px" />
          </div>
          <h4>{info.price}</h4>

          <p>{info.description}</p>

          <div className="container-button-quantity">
            <button
              onClick={() =>
                quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)
              }
            >
              -
            </button>
            <h5>{quantity}</h5>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <button onClick={() => setAddCart(true)}>Add Cart</button>
        </div>
      ) : (
        <p>Espere</p>
      )}
    </div>
  );
};
