import { useCart } from "../cartContext";
import { Iconify } from "@iconify/iconify";
import "./Product.css";
import { LeftBar } from "../LeftBarComponent/LeftBar";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { CART_API, WISHLIST_API } from "../api.js";

export function Products() {
  const { data, sortBy, dispatch, showfastDelivery } = useCart();
  const sortedData = getSortedData(data, sortBy);
  const filteredData = filterData(sortedData, showfastDelivery);
  function getSortedData(data, sortBy) {
    if (sortBy && sortBy === "HIGH_TO_LOW") {
      return data.sort((a, b) => b.price - a.price);
    }
    if (sortBy && sortBy === "LOW_TO_HIGH") {
      return data.sort((a, b) => a.price - b.price);
    }
    return data;
  }
  function filterData(data, showfastDelivery) {
    return data.filter(({ fastDelivery }) =>
      showfastDelivery ? fastDelivery : true
    );
  }

  async function addToCartClickHandler(item) {
    try {
      const { _id } = item;
      dispatch({ type: "ADD_TO_CART", payload: item });
      const res = await axios.post(CART_API, {
        _id: `${_id}`,
        quantity: 1
      });
      console.log(res);
    } catch (error) {
      console.log("Item already added to cart", error);
    }
  }
  async function addToWishListHandler(item) {
    try {
      const { _id } = item;
      dispatch({ type: "ADD_TO_WISHLIST", payload: item });
      const res = await axios.post(WISHLIST_API, {
        _id: `${_id}`,
        quantity: 1
      });
      console.log(res);
    } catch (error) {
      console.log("Item already added to Wishlist", error);
    }
  }
  console.log("filtered", filteredData);
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
                      ADD TO CART
                      <span
                        class="iconify cartIcon"
                        data-icon="ic:baseline-shopping-cart"
                        data-inline="false"
                      ></span>
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
