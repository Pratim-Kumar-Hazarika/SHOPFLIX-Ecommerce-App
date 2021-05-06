import { useCart } from "../cartContext";
import { Iconify } from "@iconify/iconify";
import "./Product.css";
import { LeftBar } from "../LeftBarComponent/LeftBar";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { CART_API, WISHLIST_API } from "../api.js";
import { useAuth } from "../authContext";

export function Products() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const userrrrr = JSON.parse(localStorage.getItem("user"));
  const { data, sortBy, dispatch, showfastDelivery ,cart,showProducts} = useCart();
  const sortedData = getSortedData(data, sortBy);
  const filteredData = filterData(sortedData, {showfastDelivery,showProducts});
  function getSortedData(data, sortBy) {
    if (sortBy && sortBy === "HIGH_TO_LOW") {
      return data.sort((a, b) => b.price - a.price);
    }
    if (sortBy && sortBy === "LOW_TO_HIGH") {
      return data.sort((a, b) => a.price - b.price);
    }
    return data;
  }
  function filterData(data, {showfastDelivery,showProducts}) {
    return data.filter(({ fastDelivery }) =>
      showfastDelivery ? fastDelivery : true
    )
    .filter(({inStock})=>showProducts ?true :inStock)
  }

  async function addToCartClickHandler(item) {
    try {
      if (login) {
        console.log("the item id is", item);
        dispatch({ type: "ADD_TO_CART", payload: item });
        const res = await axios.post(
          `https://Ecommerce-Backend.prratim.repl.co/users/${userrrrr[0]._id}/cart`,
          {
            _id: item._id
          }
        );
        console.log("res", res);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log("Item already added to cart", error);
    }
  }
  async function addToWishListHandler(item) {
    try {
      if (login) {
        dispatch({ type: "ADD_TO_WISHLIST", payload: item });
        const res = await axios.post(
          `https://Ecommerce-Backend.prratim.repl.co/users/${userrrrr[0]._id}/wishlist`,
          { _id: item._id }
        );
        console.log(res);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log("Item already added to Wishlist", error);
    }
  }
  console.log("filtered", filteredData);
  function btnText(item) {
    const { _id } = item;
    const getItem = cart.find((item) => item._id === _id);
    if (getItem) {
      return "ADDED TO CART";
    } else {
      return `ADD TO CART`;
    }
  }

  function TeenyiconsTickCircleSolid(props) {
    return (
      <svg
        class="iconify cartIcon"
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
        {...props}
      >
        <g fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0zm7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    );
  }

  function MdiCart(props) {
    return (
      <svg
        class="iconify cartIcon"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2z"
          fill="currentColor"
        ></path>
      </svg>
    );
  }
  function btnIcon(item) {
    const { _id } = item;
    const getItem = cart.find((item) => item._id === _id);
    if (getItem) {
      return <TeenyiconsTickCircleSolid />;
    } else {
      return <MdiCart />;
    }
  }
  return (
    <div style={{ display: "flex" }}>
      <LeftBar />

      <div className="product-container">
        {filteredData.map((item) => {
          const { name, image, price, offer, description, _id } = item;
          return (
            <>
              <div key={item._id} className="cart">
                <div className="typesof-card-content ">
                  <Link to={`/products/${_id}`}>
                    <img className="img-size" src={image} alt="productimg" />
                  </Link>
                  <h2>{name.slice(0, 15)}</h2>
                  <p>{description.slice(0, 30) + "...."}</p>
                  <div>
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                      ₹{price}{" "}
                    </span>
                    <span
                      className="price-slashed "
                      style={{ fontSize: "13px" }}
                    >
                      RS.2999
                    </span>
                    <span
                      className="discount-text  "
                      style={{ fontSize: "13px" }}
                    >
                      ({offer})
                    </span>
                  </div>

                  <button
                    className="add-to-chart-btn"
                    onClick={() => addToCartClickHandler(item)}
                  >
                    <div style={{ position: "relative" }}>
                    {btnText(item)}
                      {btnIcon(item)}
                    </div>
                  </button>
                  <button
                    className="wish-btn"
                    onClick={() => addToWishListHandler(item)}
                  >
                    <span
                      class="iconify iconifyicon"
                      data-icon="mdi:heart"
                      data-inline="false"
                    ></span>
                  </button>
                </div>
              </div>
            </>
          );
        })}
        {/* <button onClick={notify}>Notify!</button> */}
      </div>
    </div>
  );
}
