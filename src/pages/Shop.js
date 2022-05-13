import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../components/cardProduct";
import "./shop.css";
import {
  categorySetAllThunk,
  productSetAllThunk,
} from "../redux/actions/indexAction";

const Shop = () => {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.products);
  const listCategory = useSelector((state) => state.categories);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    dispatch(productSetAllThunk(currentCategory));
    dispatch(categorySetAllThunk());
  }, [dispatch, currentCategory]);

  return (
    <div className="container-pages-shop">
      <h2>Shop</h2>

      <div className="container-list-category">
        <button onClick={() => setCurrentCategory("")}>All</button>
        {listCategory.length !== 0 ? (
          listCategory.map((obj) => {
            return (
              <button
                onClick={() => {
                  setCurrentCategory(obj.id);
                }}
                key={obj.id}
              >
                {obj.name}
              </button>
            );
          })
        ) : (
          <h4>Espere</h4>
        )}
      </div>

      <div className="container-list-card-product">
        {listProduct.length !== 0 ? (
          listProduct.map((obj) => {
            return (
              <CardProduct
                key={obj.id}
                obj={obj}
                //   image={obj.images[0].url}
              />
            );
          })
        ) : (
          <h4>Espere</h4>
        )}
      </div>
    </div>
  );
};

export default Shop;
