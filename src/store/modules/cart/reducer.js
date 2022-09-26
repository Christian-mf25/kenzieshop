import { ADD_CART, REMOVE_CART } from "./actionsType";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.product];

    case REMOVE_CART:
      return [...action.list];

    default:
      return state;
  }
};

export default cartReducer;
