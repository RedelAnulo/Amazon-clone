import { Type } from "./action.type";

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find(item => item.id === action.item.id);
      return {
        ...state,
        basket: existingItem
          ? state.basket.map(item => item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item) 
          : [...state.basket, { ...action.item, amount: 1 }],
      };
    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(item => item.id === action.id);
      return {
        ...state,
        basket: state.basket.map((item, i) =>
          i === index ? (item.amount > 1 ? { ...item, amount: item.amount - 1 } : undefined) : item
        ).filter(item => item !== undefined),
      };
    default:
      return state;
  }
};
