import "./AddressPage.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cartContext";
import axios from "axios";
export function AddressPage() {
  const navigate = useNavigate();
  const { addresses, dispatch } = useCart();
  function addressUpdateHandler() {
    navigate("/addAddress");
  }
  const userId = JSON.parse(localStorage.getItem("user"));
  async function addressDeleteClickHandler(item) {
    try {
      const response = await axios.delete(
        `https://Ecommerce-Backend.prratim.repl.co/users/${userId[0]._id}/address`,
        {
          data: { _id: item }
        }
      );
      dispatch({ type: "DELETE_ADDRESS", payload: item });
      if (response.status === 200) {
        console.log("deleted sucessfully", response);
      }
    } catch (error) {
      console.log("error while deleting the address");
    }
  }
  function editClickHandler(item) {
    navigate(`/addressEdit/${item._id}`);
    localStorage.setItem("useraddress", JSON.stringify(item));
  }
  return (
    <div className="md_div">
    <div className="addressScreenPage add_screenPage">
      <div className="plus_div">
        <div style={{ textAlign: "center" }}>
          <span
            class="iconify plus_iconify"
            data-icon="ph:plus-thin"
            data-inline="false"
          ></span>
        </div>
      </div>
      <div className="userContent">
        <div>
          <span>You can add multiple addreses for you friends, family</span>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <button
          onClick={addressUpdateHandler}
          className="add_address_btn "
          style={{ fontWeight: "bold", marginTop: "1rem" }}
        >
          ADD NEW ADDRESS
        </button>
      </div>
    </div>
    {addresses.map((item) => {
      const {
        _id,
        city,
        fullName,
        phone,
        pincode,
        flatNo,
        state,
        country,
        landmark,
        addressType
      } = item;
      return (
        <div className="addressScreenPage add_screenPage">
          <div style={{ borderBottom: "1px solid #eaeaec" }}>
            <h1 style={{ fontWeight: "lighter", color: "#282C3F" }}>
              Saved Address
            </h1>
          </div>

          <div className="userContent">
            <div>{fullName}</div>

            <div className="text_bold" style={{ marginLeft: "10px" }}>
              {addressType}
            </div>
          </div>
          <div className="userContent">
            <div>
              <span>
                {flatNo} {landmark}
              </span>
            </div>
          </div>

          <div className="userContent">
            <div>
              {state}-{pincode}, {country}
              {city}
            </div>
          </div>
          <div className="userContent">
            <div>Phone no :{phone}</div>
          </div>
          <div style={{ display: "flex" }}>
            <button
              onClick={() => editClickHandler(item)}
              className="wish_color "
              style={{ fontWeight: "bold", marginTop: "1rem" }}
            >
              EDIT
            </button>
            <button
              className="btn_color "
              onClick={() => addressDeleteClickHandler(_id)}
              style={{
                fontWeight: "bold",
                marginTop: "1rem",
                marginLeft: "10px"
              }}
            >
              REMOVE
            </button>
          </div>
        </div>
      );
    })}
  </div>
  );
}
