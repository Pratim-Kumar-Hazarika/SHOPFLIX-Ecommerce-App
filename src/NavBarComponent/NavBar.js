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
    <div className="shopflix_logo_name">
      <span style={{ fontWeight: "bold" }}>SHOPFLIX</span>
      <span
        class="iconify brand_logo"
        data-icon="fa:shopping-bag"
        data-inline="false"
      ></span>

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
