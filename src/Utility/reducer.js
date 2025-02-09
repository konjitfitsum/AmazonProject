import * as Type from "./action.type"; // Fixed import

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      return {
        ...state,
        basket: action.item
          ? [...state.basket, action.item]
          : [...state.basket], // Prevents undefined items
      };

    // case Type.REMOVE_FROM_BASKET:
    //   return {
    //     ...state,
    //     basket: state.basket.filter((item) => item.id !== action.id),
    //   };

    default:
      return state;
  }
};
