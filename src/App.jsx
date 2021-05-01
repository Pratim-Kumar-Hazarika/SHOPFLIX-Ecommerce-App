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
import { Login } from "./LoginPage/Login";
import { SignUp } from "./SignUp";
import { PrivateRoute } from "./LoginPage/PrivateRoute";
import { useAuth } from "./authContext";
export default function App() {
  const { dispatch, toastId } = useCart();
  const { login, signOutHandler } = useAuth();
  useEffect(() => {
    async function getData() {
      try {
        const {
          data: { product }
        } = await axios.get(PRODUCTS_API);
        dispatch({ type: "DATA_FROM_SERVER", payload: product });
        const userId = JSON.parse(localStorage.getItem("user"));
        console.log("the id is mfaaa", userId[0]._id);
        const {
          data: {
            user: { cart }
          }
        } = await axios.get(
          `https://Ecommerce-Backend-6.prratim.repl.co/users/${userId[0]._id}/cart`
        );
        const cartItems = cart.map((item) => item.product);

        dispatch({ type: "CART_DATA_FROM_SERVER", payload: cartItems });
        const {
          data: {
            user: { wishlist }
          }
        } = await axios.get(
          `https://Ecommerce-Backend-6.prratim.repl.co/users/${userId[0]._id}/wishlist`
        );
        console.log("wishhhhhh", wishlist);
        dispatch({ type: "WISH_DATA_FROM_SERVER", payload: wishlist });
      } catch (error) {
        console.log("Error Found", error);
      }
    }
    console.log("signout handler", signOutHandler);
    return getData();
  }, [signOutHandler, login]);

  return (
    <div className="App">
      <NavBar />
      {toastId && <ToastContainer newestOnTop={false} autoClose={3000} />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <PrivateRoute path="/wishlist" element={<WishList />} />
        <PrivateRoute path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
