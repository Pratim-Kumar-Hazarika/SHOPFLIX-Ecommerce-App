import { useParams } from "react-router-dom";
import { useCart } from "../cartContext";
import { CART_API, WISHLIST_API } from "../api.js";
import "./ProductDetail.css";
import axios from "axios";

export function ProductDetail() {
  const { data, dispatch } = useCart();
  const { productId } = useParams();
  console.log("id is", productId);
  console.log("data", data);
  const productFound = data.find((item) => item._id === productId);
  console.log({ productFound });
  const { name, image, price, description, offer } = productFound;

  async function addToCartClickHandler(productFound) {
    try {
      dispatch({ type: "ADD_TO_CART", payload: productFound });
      const res = await axios.post(CART_API, {
        _id: `${productFound._id}`,
        quantity: 1
      });
      console.log(res);
    } catch (error) {
      console.log("Item already added to cart", error);
    }
  }
  async function addToWishListHandler(productFound) {
    try {
      dispatch({ type: "ADD_TO_WISHLIST", payload: productFound });
      const res = await axios.post(WISHLIST_API, {
        _id: `${productFound._id}`,
        quantity: 1
      });
      console.log(res);
    } catch (error) {
      console.log("Item already added to Wishlist", error);
    }
  }
  return (
    <>
      <div className="product-detail-card">
        <div className="image-detail-div">
          <img className=" product-detail-img" src={image} alt="productimg" />
        </div>
        <div className="product_details_div">
          <div className="detail_div_product" style={{ overflow: "hidden" }}>
            <div className="name_text">{name}</div>
            <div className="description">
              <span>{description}</span>
            </div>
            <div
              style={{ fontWeight: "bold", fontSize: "10px", color: "#ff3f6c" }}
            >
              Special Price
            </div>
            <span className="total_price tt_price">
              Rs.{price}
              <span className="price-slashed mrp-slashed">RS.2999</span>
              <span className="discount-text mrp-slashed ">({offer})</span>
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
                  <span style={{ fontWeight: "bold" }}>Bank Offer 10%</span> Off
                  on Bank of Baroda Mastercard debit card first time
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
                  <span style={{ fontWeight: "bold" }}>Bank Offer 10%</span> Off
                  on Bank of Baroda Mastercard debit card first time
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
                  <span style={{ fontWeight: "bold" }}>Bank Offer 10%</span> Off
                  on Bank of Baroda Mastercard debit card first time
                  transaction, Terms and Condition apply
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <button
                onClick={() => addToCartClickHandler(productFound)}
                className="add-to-chart-btn product-detail-addtocart"
              >
                ADD TO CART
                <span
                  class="iconify cartIcon"
                  data-icon="ic:baseline-shopping-cart"
                  data-inline="false"
                ></span>
              </button>
              <button
                className="wish-btn"
                onClick={() => addToWishListHandler(productFound)}
              >
                <span
                  class="iconify iconifyicon "
                  data-icon="mdi:heart"
                  data-inline="false"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
