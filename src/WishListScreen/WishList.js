import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../cartContext";
import { WISHLIST_API } from "../api.js";
import "./WishList.css";
export function WishList() {
  const { wishList, dispatch,cart } = useCart();
  // const itemFromWish = wishList.map((item) => item.product);

  async function removeFromWishListHandler(item) {
    try {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item._id });
      const res = await axios.delete(`${WISHLIST_API}/${item._id}`);
    } catch (error) {
      console.log("error occured");
    }
  }

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
                  >  {btnText(item)}
                  {btnIcon(item)}
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
