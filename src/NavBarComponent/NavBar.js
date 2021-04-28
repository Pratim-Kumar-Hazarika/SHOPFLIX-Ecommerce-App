import { useCart } from "../cartContext";
import "./Navbar.css";
import { Link } from "react-router-dom";

export function NavBar() {
  const { show, setShow, cart, wishList } = useCart();
  return (
    <div className="nav_div">
      <div className="icon_name">
        <button className="leftBar_button" onClick={() => setShow(!show)}>
          <span
            class="iconify shopflix_icon"
            data-icon="mdi:arrow-right-bold"
            data-inline="false"
          ></span>
        </button>
        <h1>ShopFlix</h1>
        <Link to="/">
          <span
            class="iconify shopflix_icon"
            data-icon="ic:round-shopping-cart"
            data-inline="false"
          ></span>
        </Link>
      </div>

      <div className="nav_right_icons">
        <div className="wish_icon_right">
          <Link to="/wishlist">
            <span
              class="iconify shopflix_icon"
              data-icon="mdi:heart-outline"
              data-inline="false"
            ></span>
            <span className="badge-no">
              {wishList.length > 0 && wishList.length}
            </span>
          </Link>
        </div>
        <div>
          <div style={{ position: "relative" }}>
            <Link to="/cart">
              <span
                class="iconify shopflix_icon"
                data-icon="mdi:cart-arrow-down"
                data-inline="false"
              ></span>
            </Link>
            <span className="badge-no">{cart.length > 0 && cart.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
