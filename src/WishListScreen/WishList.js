import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../cartContext";
import { WISHLIST_API } from "../api.js";
import "./WishList.css";
export function WishList() {
  const { wishList, dispatch } = useCart();
  // const itemFromWish = wishList.map((item) => item.product);

  async function removeFromWishListHandler(item) {
    try {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item._id });
      const res = await axios.delete(`${WISHLIST_API}/${item._id}`);
    } catch (error) {
      console.log("error occured");
    }
  }
  return (
    <>
      {wishList.length === 0 && (
        <div
          style={{
            width: "80%",
            margin: "auto",
            marginTop: "4rem"
          }}
        >
          <div className="empty_wishList_div">
            <div>
              <h2>YOUR WISHLIST IS EMPTY</h2>
            </div>
            <div style={{ margin: "20px auto 0" }}>
              <p>
                Add items that you like to your wishlist. Review them anytime
                and easily move them to the cart.
              </p>
            </div>
            <div>
              <span
                class="iconify  wishListEmptyIcon"
                data-icon="mdi:cart-arrow-down"
                data-inline="false"
              ></span>
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

      <div className="wishlist-container">
        {wishList.map((item) => {
          const { name, image, price, offer, description, _id } = item;
          return (
            <>
              <div key={item._id} className="cart">
                <div className="typesof-card-content ">
                  <img className="img-size" src={image} alt="productimg" />
                  <h2>{name.slice(0, 15)}</h2>
                  <p>{description.slice(0, 30) + "...."}</p>
                  <h3>
                    Rs
                    {price}
                    <span className="price-slashed">RS.2999</span>
                    <span className="discount-text">({offer})</span>
                  </h3>
                  <button
                    className="add-to-chart-btn move-to-bag-btn"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: item })
                    }
                    s
                  >
                    MOVE TO CART
                    <span
                      class="iconify cartIcon"
                      data-icon="mdi:cart"
                      data-inline="false"
                    ></span>
                  </button>
                  <button
                    className="wish-btn"
                    onClick={() => removeFromWishListHandler(item)}
                  >
                    <span
                      class="iconify iconifyicon"
                      data-icon="entypo:circle-with-cross"
                      data-inline="false"
                    ></span>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
