import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import {
  deleteProductCart,
  getProductCart,
  payProducts,
} from "../services/services";

const Cart = () => {
  const [listProductCart, setListProductCart] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState("");
  const [payProduct, setPayProduct] = useState(false);

  const navigator = useNavigate();

  useEffect(() => {
    getProductCart().then((req) => {
      setListProductCart(req.data);
    });
  }, [deleteProduct]);

  useEffect(() => {
    if (deleteProduct) {
      deleteProductCart(deleteProduct)
        .then((req) => {
          setDeleteProduct("");
        })
        .catch((err) => {
          setDeleteProduct("");
        });
    }
  }, [deleteProduct]);

  useEffect(() => {
    if (payProduct) {
      payProducts().then((req) => {
        setPayProduct(false);
        navigator("/shop/cart/pay");
      });
    }
  }, [payProduct, navigator]);
  const sumAllPrice = () => {
    let sumAll = 0;
    listProductCart.forEach((el) => {
      sumAll += +el.product.price * +el.quantity;
    });
    return sumAll;
  };

  return (
    <div className="container-pages-cart">
      {listProductCart.length > 0 ? (
        listProductCart.map((el) => {
          return (
            <CardProductCart
              key={el.id}
              data={el}
              setDeleteProduct={setDeleteProduct}
            />
          );
        })
      ) : (
        <p>No hay productos en el carrito</p>
      )}

      <div>
        <h3>Total a pagar</h3>
        <h4>{sumAllPrice()}</h4>
        <button onClick={() => setPayProduct(true)}>Pagar</button>
      </div>
    </div>
  );
};

const CardProductCart = ({ data, setDeleteProduct }) => {
  return (
    <div>
      <div className="product-cart-buy">
        <h3>{data.product.name}</h3>
        <img src={data.product.images[0].url} alt="" width="200px" />
        <h4>{data.product.price}</h4>
        <h5>Cantidad: {data.quantity}</h5>
        <button onClick={() => setDeleteProduct(data.id)}>
          Eliminar producto
        </button>
      </div>
    </div>
  );
};

export default Cart;
