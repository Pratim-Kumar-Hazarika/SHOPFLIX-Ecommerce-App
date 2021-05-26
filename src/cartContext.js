import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./cart-Reducer";
import { productsData } from "./cart-Reducer";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [
    { data, sortBy,addresses, wishList, cart, toastId, showfastDelivery ,showProducts},
    dispatch
  ] = useReducer(reducer, productsData);

  const [show, setShow] = useState(false);
  return (
    <CartContext.Provider
      value={{
        data,
        sortBy,
        dispatch,
        show,
        setShow,
        wishList,
        cart,
        toastId,
        showfastDelivery,
        showProducts,
        addresses
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
