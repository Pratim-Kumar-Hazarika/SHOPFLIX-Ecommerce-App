import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import { toastDesign } from "./toast/toastColor.js";
export const productsData = {
  data: [],
  sortBy: false,
  wishList: [],
  cart: [],
  toastId: false,
  showfastDelivery: null,
  showProducts: true
};

export function reducer(state, action) {
  switch (action.type) {
    case "DATA_FROM_SERVER":
      return {
        ...state,
        data: action.payload
      };
    case "SORT":
      return {
        ...state,
        sortBy: action.payload
      };
    ////Cart
    case "CART_DATA_FROM_SERVER":
      return {
        ...state,
        cart: action.payload
      };
    case "ADD_TO_CART":
      if (state.cart.length >= 0) {
        const productInList = state.cart.find(
          (item) => item._id === action.payload._id
        );
        if (productInList) {
          return {
            ...state,
            toastId: toast("ALREADY IN CART 🛒", toastDesign),

            cart: state.cart.map((item) =>
              item.id === action.payload._id
                ? { ...item, _id: item._id + "1" }
                : item
            )
          };
        } else {
          return {
            ...state,
            toastId: toast("ADDED TO CART 🛒", toastDesign),
            cart: [...state.cart, action.payload]
          };
        }
      }
      break;
    case "REMOVE_FROM_CART":
      return {
        ...state,
        toastId: toast("REMOVED FROM CART 🛒", toastDesign),
        cart: state.cart.filter((item) => item._id !== action.payload)
      };
    ///WishList
    case "WISH_DATA_FROM_SERVER":
      return {
        ...state,
        wishList: action.payload
      };
    case "ADD_TO_WISHLIST":
      if (state.wishList.length >= 0) {
        const productInList = state.wishList.find(
          (item) => item._id === action.payload._id
        );
        if (productInList) {
          return {
            ...state,
            toastId: toast("ALREADY IN WISHLIST ❤", toastDesign),
            wishList: state.wishList.map((item) =>
              item.id === action.payload._id ? { ...item, item } : item
            )
          };
        } else {
          return {
            ...state,
            toastId: toast("ADDED TO WISHLIST ❤", toastDesign),
            wishList: [...state.wishList, action.payload]
          };
        }
      }
      break;
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        toastId: toast("REMOVED FROM WISHLIST ❤", toastDesign),
        wishList: state.wishList.filter((item) => item._id !== action.payload)
      };

    case "FILTER_DELIVERY":
      return {
        ...state,
        showfastDelivery: !state.showfastDelivery
      };
      case "INCREMENT_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === action.payload
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        };
        case "DECREMENT_QUANTITY":
          return {
            ...state,
            cart: state.cart.map((item) =>
              item._id === action.payload
                ? { ...item, qty: item.qty - 1 }
                : item
            )
          };
        case "FILTER_STOCK":
          return{
            ...state,
            showProducts:!state.showProducts
          }
    default:
      return state;
  }
}
