import { useCart } from "../cartContext";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../authContext";
import { DropDown } from "../DropDownComp/DropDown";

export function NavBar() {
  const { show, setShow, cart, wishList } = useCart();
  const { login } = useAuth();
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
        <h1 style={{ fontWeight: "bold" }}>SHOPFLIX</h1>
        <Link to="/">
          <span
            class="iconify shopflix_icon"
            data-icon="emojione-v1:shopping-bags"
            data-inline="false"
          ></span>
        </Link>
      </div>

      <div className="nav_right_icons">
        <div style={{ marginRight: "1rem" }} className="dropdown">
          <div style={{ marginLeft: "5px" }}>
            <span
              class="iconify shopflix_icon user"
              data-icon="clarity:user-line"
              data-inline="false"
            ></span>
          </div>
          <div className="icon_names">Profile</div>
          <DropDown />
        </div>
        <div className="wish_icon_right">
          <Link to="/wishlist">
            <div style={{ marginLeft: "10px" }}>
              <span
                class="iconify shopflix_icon"
                data-icon="clarity:heart-line"
                data-inline="false"
              ></span>
            </div>
          </Link>
          <div className="icon_names">WishList</div>
          <span className="badge-no">{login && wishList.length}</span>
        </div>
        <div>
          <div style={{ position: "relative" }}>
            <Link to="/cart">
              <div>
                <span
                  class="iconify shopflix_icon"
                  data-icon="clarity:shopping-cart-line"
                  data-inline="false"
                ></span>
              </div>
            </Link>
            <div className="icon_names">Cart</div>

            <span className="badge-no badge_two">{login && cart.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
