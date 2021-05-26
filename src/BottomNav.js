import "./BottomNav.css";
import { useCart } from "./cartContext";

export function BottomNav() {
  const { show, setShow } = useCart();
  return (
    <>
      <div className="bottom_div">
        <div className="sort_div" onClick={() => setShow(!show)}>
          <span
            class="iconify bottom_icon"
            data-icon="iwwa:sort-by"
            data-inline="false"
          ></span>
          <span className="filters_sorts">SORT</span>
        </div>
        <div class="seperator"></div>
        <div className="filter_div">
          <span
            class="iconify bottom_icon"
            data-icon="ph:sliders-horizontal"
            data-inline="false"
          ></span>
          <span className="filters_sorts">FILTER</span>
        </div>
      </div>
    </>
  );
}
