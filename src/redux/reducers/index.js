import { actions } from "../actions/indexAction";

const InitialState = {
  products: [],
  categories: [],
  productInfo: {},
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actions.productSetAll:
      return {
        ...state,
        products: action.payload,
      };

    case actions.categorySetAll:
      return {
        ...state,
        categories: action.payload,
      };

    case actions.productSetInfo:
      return {
        ...state,
        productInfo: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
