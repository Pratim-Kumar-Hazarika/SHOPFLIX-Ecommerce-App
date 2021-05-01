import { useCart } from "../cartContext";
import "./Cart.css";
import { ReactComponent as EmptyTrolly } from "../assets/trolly.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { CART_API } from "../api.js";
import { useEffect } from "react";

export function Cart() {
  const { cart, dispatch } = useCart();
  const userrrrr = JSON.parse(localStorage.getItem("user"));

  async function removeFromCartHandler(item) {
    try {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: item._id
      });
      const res = await axios.delete(
        `https://Ecommerce-Backend.prratim.repl.co/users/${userrrrr[0]._id}/cart`,
        { data: { _id: item._id } }
      );
      console.log("deleted", res);
    } catch (error) {
      console.log("Error occured");
    }
  }
  function price() {
    return cart.reduce((acc, val) => acc + val.price * 1, 0);
  }
  return (
    <div className="main_products">
      {cart.length === 0 && (
        <div
          style={{
            width: "80%",
            margin: "auto",
            marginTop: "4rem"
          }}
        >
          <div className="empty_wishList_div">
            <div>
              <h2>IT FEELS SO LIGHT</h2>
            </div>
            <div style={{ margin: "20px auto 0" }}>
              <p>There is nothing in your cart. Lets add some items.</p>
            </div>
            <div>
              <EmptyTrolly className="trollyimage" />
            </div>
            <div>
              <Link to="/products">
                <button className="add-to-chart-btn continueShoppingBtn">
                  CONTINUE SHOPPING
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="cart_div">
        {cart.map((item) => {
          const { name, image, price, description, _id } = item;
          return (
            <>
              <div key={_id} className=" horizontalcard">
                <div>
                  <img className="product_img" src={image} alt="productimg" />
                </div>
                <div className="details_div">
                  <div style={{ overflow: "hidden" }}>
                    <div className="total_price">{name}</div>
                    <div>
                      <span>{description}</span>
                    </div>
                    <div className="total_price">₹{price}</div>
                    <div style={{ marginTop: "1rem" }}>
                      <button className="add-to-chart-btn incBtn">
                        <span
                          class="iconify"
                          data-icon="mdi:minus"
                          data-inline="false"
                        ></span>
                      </button>
                      44
                      <button className="add-to-chart-btn incBtn">
                        <span
                          class="iconify "
                          data-icon="mdi:plus"
                          data-inline="false"
                        ></span>
                      </button>
                      <div style={{ marginTop: "1rem" }}>
                        <button
                          className="add-to-chart-btn"
                          onClick={() => removeFromCartHandler(item)}
                        >
                          REMOVE FROM CART
                          <span
                            class="iconify cartIcon removeIcon"
                            data-icon="ic:round-remove-shopping-cart"
                            data-inline="false"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {cart.length > 0 && <div style={{ borderLeft: "2px solid #E5E7EB" }} />}

      {cart.length > 0 && (
        <div className="checkout">
          <div>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>
              PRICE DETAILS ({cart.length} ITEM)
            </div>

            <div className="place-order-prices-div">
              <div>TOTAL MRP</div>
              <div className="total_price">₹ {price()}</div>
            </div>

            <div className="place-order-prices-div">
              <div>Discount</div>
              <div className="total_price">₹0</div>
            </div>

            <div className="place-order-prices-div">
              <div>Convinence Fees</div>
              <div style={{ color: " #ff3f6c" }}>Free</div>
            </div>

            <div
              className="place-order-prices-div"
              style={{ borderBottom: "1px solid #ff3f6c" }}
            >
              <div>Total Price</div>
              <div className="total_price">₹ {price()} </div>
            </div>

            <button className="add-to-chart-btn move-to-bag-btn place-order-btn">
              PLACE ORDER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
// class="icon-increment"
