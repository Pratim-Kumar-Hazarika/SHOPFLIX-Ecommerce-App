import { useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { useCart } from "./cartContext";
import { Products } from "./ProductsScreen/Products";
import { Routes, Route } from "react-router-dom";
import { WishList } from "./WishListScreen/WishList";
import { Cart } from "./CartScreen/Cart";
import { ProductDetail } from "./ProductDetailScreen/ProductDetail";
import { NavBar } from "./NavBarComponent/NavBar";
import { LandingPage, toast } from "./LandingScreen/LandingPage";
import { ToastContainer } from "react-toastify";
import { PRODUCTS_API, CART_API, WISHLIST_API } from "./api.js";
export default function App() {
  const { dispatch, toastId } = useCart();
  useEffect(() => {
    async function getData() {
      try {
        const {
          data: { product }
        } = await axios.get(PRODUCTS_API);
        dispatch({ type: "DATA_FROM_SERVER", payload: product });
        const {
          data: { cart }
        } = await axios.get(CART_API);
        const cartItems = cart.map((item) => item.product);
        dispatch({ type: "CART_DATA_FROM_SERVER", payload: cartItems });
        const {
          data: { wishlist }
        } = await axios.get(WISHLIST_API);
        const wishItems = wishlist.map((item) => item.product);
        dispatch({ type: "WISH_DATA_FROM_SERVER", payload: wishItems });
      } catch (error) {
        console.log("Error Found", error);
      }
    }
    return getData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      {toastId && <ToastContainer newestOnTop={false} autoClose={3000} />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
