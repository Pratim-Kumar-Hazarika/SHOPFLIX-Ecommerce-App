import { useCart } from "../cartContext";
import "./LeftBar.css";
export function LeftBar() {
  const { show, dispatch, sortBy, showfastDelivery ,showProducts } = useCart();

  return (
    <>
      <div className="left_nav" style={{ display: show && "none" }}>
        <h3 style={{ marginLeft: "3rem" }}>FILTERS</h3>
        <div className="price_div">
          <div style={{ fontWeight: "800" }}>PRICE</div>
          <div>
            <label className="label">
              <input
                type="radio"
                name="sort"
                checked={sortBy && sortBy === "HIGH_TO_LOW"}
                onClick={() =>
                  dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                }
              />
              Price High to Low
            </label>
          </div>
          <div>
            <label className="label">
              <input
                type="radio"
                name="sort"
                checked={sortBy && sortBy === "LOW_TO_HIGH"}
                onClick={() =>
                  dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                }
              />
              Low to High
            </label>
          </div>
        </div>

        <div className="price_div">
          <div>
            <div  style={{ fontWeight: "800" }}>AVAILABLE</div>
            <div className="avalaible">
              <label className="label">
                <input type="checkbox" checked={showProducts}
                onChange={()=>dispatch({type:"FILTER_STOCK"})}
                />
                Include out of stock
              </label>
            </div>
            <div className="avalaible">
              <label className="label">
                <input
                  type="checkbox"
                  checked={showfastDelivery}
                  onChange={() =>
                    dispatch({
                      type: "FILTER_DELIVERY",
                      payload: "FAST_DELIVERY"
                    })
                  }
                />
                Fast Delivery
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
