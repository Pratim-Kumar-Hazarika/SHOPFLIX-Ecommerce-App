import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";
import "./DropDown.css";
export function DropDown() {
  const { signOutHandler, login } = useAuth();
  const userId = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  function btnNavigate() {
    navigate("/login");
  }
  return (
    <>
      <div className="dropScreen">
        <div style={{ borderBottom: "1px solid #eaeaec" }}>
          <span>
            Hello{" "}
            <span className="text_bold">
              {userId === null ? "User" : userId[0].name}
            </span>
          </span>
        </div>
        <div className="userContent ">
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
        </div>
        <div className="userContent ">
          <Link to="/products" className="link">
            <span>Products</span>
          </Link>
        </div>
        <div className="userContent ">
          <Link to="/wishlist" className="link">
            <span>Wishlist</span>
          </Link>
        </div>
        <div className="userContent ">
          <Link to="/cart" className="link">
            <span>Cart</span>
          </Link>
        </div>
        <div className="userContent ">
          <Link to="/address" className="link">
            <span>Addresses</span>
          </Link>
        </div>
        <div className="userContent ">
          <Link to="/login" className="link">
            <span>Edit Profile</span>
          </Link>
        </div>
        {login && (
          <button
            onClick={signOutHandler}
            className="add-to-chart-btn logoutBtn"
            style={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            LOGOUT
          </button>
        )}
        {!login && (
          <button
            onClick={btnNavigate}
            className="add-to-chart-btn logoutBtn"
            style={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            LOGIN
          </button>
        )}
      </div>
    </>
  );
}
