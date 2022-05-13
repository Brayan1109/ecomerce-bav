import {
  getCategory,
  getFilterProducts,
  getProductById,
  getProduct,
} from "../../services/services";

export const actions = {
  productSetAll: "@Products/setAll",
  categorySetAll: "@Category/setAll",
  productSetInfo: "@Product/setInfo",
};

export const productSetAll = (data) => {
  return {
    type: actions.productSetAll,
    payload: data,
  };
};

export const categorySetAll = (data) => {
  return {
    type: actions.categorySetAll,
    payload: data,
  };
};

export const productSetInfo = (data) => {
  return {
    type: actions.productSetInfo,
    payload: data,
  };
};

export const productSetAllThunk = (category) => {
  return (dispatch) => {
    if (category) {
      getFilterProducts(category).then((req) => {
        dispatch(productSetAll(req.data));
        console.log(req);
      });
    } else {
      getProduct().then((req) => {
        //   console.log(req.data);
        dispatch(productSetAll(req.data));
      });
    }
  };
};

export const categorySetAllThunk = () => {
  return (dispatch) =>
    getCategory().then((req) => {
      dispatch(categorySetAll(req.data));
      //   console.log(req.data);
    });
};

export const productSetInfoThunk = (id) => {
  return (dispatch) =>
    getProductById(id).then((req) => {
      dispatch(productSetInfo(req.data));
    });
};
