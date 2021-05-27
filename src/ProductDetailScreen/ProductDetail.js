import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../cartContext";
import { CART_API, WISHLIST_API } from "../api.js";
import "./ProductDetail.css";
import axios from "axios";
import { useAuth } from "../authContext";
import { ToastContainer } from "react-toastify";

export function ProductDetail() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { data, dispatch ,cart,toastId} = useCart();
  const { productId } = useParams();
  console.log("id is", productId);
  console.log("data", data);
  const productFound = data.find((item) => item._id === productId);
  console.log({ productFound });
  const { name, image, price, description, offer } = productFound;
  const userrrrr = JSON.parse(localStorage.getItem("user"));
  async function addToCartClickHandler(productFound) {
    try {
      if (login) {
        dispatch({ type: "ADD_TO_CART", payload: productFound });
        const res = await axios.post(
          `https://Ecommerce-Backend.prratim.repl.co/users/${userrrrr[0]._id}/cart`,
          {
            _id: productFound._id
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
  async function addToWishListHandler(productFound) {
    try {
      dispatch({ type: "ADD_TO_WISHLIST", payload: productFound });
      const res = await axios.post(
        `https://Ecommerce-Backend.prratim.repl.co/users/${userrrrr[0]._id}/wishlist`,
        { _id: productFound._id }
      );
      console.log("Added to wishlist", res);
    } catch (error) {
      console.log("Item already added to Wishlist", error);
    }
  }
  function btnText(productFound) {
    const { _id } = productFound;
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
  function btnIcon(productFound) {
    const { _id } = productFound;
    const getItem = cart.find((item) => item._id === _id);
    if (getItem) {
      return <TeenyiconsTickCircleSolid />;
    } else {
      return <MdiCart />;
    }
  }
  return (
    <div>
    <div>
      <div className="product-detail-card">
        <div className="image-detail-div">
          <img
            className=" product-detail-img"
            src="https://lp2.hm.com/hmgoepprod?set=source[/e5/3d/e53d6153cb2dcbc8b07813a23001f990af535690.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]"
            alt="productimg"
          />
        </div>
        <div className="product_details_div">
          <div className="detail_div_product" style={{ overflow: "hidden" }}>
            <div className="name_text">Adidas Nike</div>
            <div className="description">
              <span>Men Burgundy Solid Slim Fit Round Neck T-shirt</span>
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                color: "#ff3f6c"
              }}
            >
              Special Price
            </div>
            <span className="total_price tt_price">
              Rs.1299
              <span className="price-slashed mrp-slashed">RS.2999</span>
              <span className="discount-text mrp-slashed ">50%</span>
            </span>
            <div>
              <span
                class="iconify iconifyicon"
                data-icon="ri:star-s-fill"
                data-inline="false"
              ></span>
              <span
                class="iconify iconifyicon"
                data-icon="ri:star-s-fill"
                data-inline="false"
              ></span>
              <span
                class="iconify iconifyicon"
                data-icon="ri:star-s-fill"
                data-inline="false"
              ></span>
            </div>
            <div style={{ fontWeight: "bold", marginTop: "1rem" }}>
              SELECT SIZE
            </div>
            <div style={{ display: "flex" }}>
              <button className="size_btn">S</button>
              <button className="size_btn">M</button>
              <button className="size_btn">L</button>
              <button className="size_btn">XL</button>
              <button className="size_btn">XXL</button>
            </div>
            <div style={{ fontWeight: "bold", marginTop: "1rem" }}>
              PRODUCT DETAILS
            </div>
            <div className="pd_detail">
              <span>
                Burgundy solid T-shirt, has a round neck, and short sleeves
              </span>
            </div>
            <div style={{ fontWeight: "bold", marginTop: "1rem" }}>
              Size & Fit
            </div>
            <div className="pd_detail">
              <span>Slim Fit</span>
              <div>The model (height 6') is wearing a size M</div>
            </div>
            <div style={{ fontWeight: "bold", marginTop: "1rem" }}>
              Material & Care
            </div>
            <div className="pd_detail">
              <span>100% cotton</span>
              <div>Machine-wash</div>
            </div>
            <div className="available_offer">
              Available Offers
              <div className="bank_tags">
                <div>
                  {" "}
                  <span
                    class="iconify iconifyicon"
                    data-icon="mdi:tag"
                    data-inline="false"
                  ></span>
                </div>

                <div className="bank_offer_text">
                  <span style={{ fontWeight: "bold" }}>Bank Offer 10%</span>{" "}
                  Off on Bank of Baroda Mastercard debit card first time
                  transaction, Terms and Condition apply
                </div>
              </div>
              <div className="bank_tags">
                <div>
                  {" "}
                  <span
                    class="iconify iconifyicon"
                    data-icon="mdi:tag"
                    data-inline="false"
                  ></span>
                </div>

                <div className="bank_offer_text">
                  <span style={{ fontWeight: "bold" }}>Bank Offer 10%</span>{" "}
                  Off on Bank of Baroda Mastercard debit card first time
                  transaction, Terms and Condition apply
                </div>
              </div>
              <div className="bank_tags">
                <div>
                  {" "}
                  <span
                    class="iconify iconifyicon"
                    data-icon="mdi:tag"
                    data-inline="false"
                  ></span>
                </div>

                <div className="bank_offer_text">
                  <span style={{ fontWeight: "bold" }}>Bank Offer 10%</span>{" "}
                  Off on Bank of Baroda Mastercard debit card first time
                  transaction, Terms and Condition apply
                </div>
              </div>
            </div>
          </div>
          <div className="cart_wish_btn">
            <button
              className=" wish_color"
              onClick={() => addToWishListHandler(productFound)}
            >
              <span
                class="iconify  icon_product_detail"
                data-icon="mdi:heart"
                data-inline="false"
              ></span>
              WISHLIST
            </button>

            <button
              onClick={() => addToCartClickHandler(productFound)}
              className=" btn_color"
            >
              
             {btnText(productFound)}
             {btnIcon(productFound)}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
