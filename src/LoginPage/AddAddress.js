import { useState } from "react";
import "./AddressUpdate.css";
import axios from "axios";
import { CountryDropdown } from "react-country-region-selector";
import { useNavigate } from "react-router-dom";
export function AddAddress() {
  const [country, setCountry] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [pincode, setPinCode] = useState("");
  const [apartmentNo, setApartmentNo] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [addressType, setAddressType] = useState("");
  const navigate = useNavigate();
  function selectHandler(value) {
    setCountry(value);
    console.log(" IM COUNTERY SELELCTED", country);
  }
  const userId = JSON.parse(localStorage.getItem("user"));
  async function addAddressClickHandler(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://Ecommerce-Backend.prratim.repl.co/users/${userId[0]._id}/address`,
        {
          city: city,
          fullName: fullName,
          phone: mobileno,
          pincode: pincode,
          flatNo: apartmentNo,
          state: region,
          country: country,
          landmark: landmark,
          addressType: addressType
        }
      );
      if (response.status === 200) {
        navigate("/address");
        console.log("Successfully address is added...");
      }
    } catch (error) {
      console.log("Error while adding address..");
    }
  }
  return (
    <>
      <div className="login-div add_div">
        <div className="signupScreen add_screen">
          <form className="add_form">
            <h1>
              Add a <span className="text_bold">new address</span>
            </h1>
            <div>
              <span className="form_tags">Country/Region</span>
              <div>
                <CountryDropdown
                  className="form_input_tags select_tag"
                  value={country}
                  onChange={(value) => selectHandler(value)}
                />
              </div>
            </div>

            <div>
              <span className="form_tags">Full Name(First and Last name)</span>
              <div className="form_input_tags">
                <input
                  type="text"
                  placeholder=""
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <span className="form_tags">Mobile number</span>
              <div className="form_input_tags">
                <input
                  value={mobileno}
                  onChange={(e) => setMobileNo(e.target.value)}
                  type="number"
                  placeholder="10-digit mobile number without prefixes"
                />
              </div>
            </div>

            <div>
              <span className="form_tags">PIN code</span>
              <div className="form_input_tags">
                <input
                  value={pincode}
                  onChange={(e) => setPinCode(e.target.value)}
                  type="number"
                  placeholder="6 digits[0-9] PIN Code"
                />
              </div>
            </div>

            <div>
              <span className="form_tags">Flat, House no, Apartment</span>
              <div className="form_input_tags">
                <input
                  value={apartmentNo}
                  onChange={(e) => setApartmentNo(e.target.value)}
                  type="text"
                />
              </div>
            </div>

            <div>
              <span className="form_tags">Landmark</span>
              <div className="form_input_tags">
                <input
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  type="text"
                  placeholder="E.g.Near Los angles flyover"
                />
              </div>
            </div>

            <div>
              <span className="form_tags">Town/City</span>
              <div className="form_input_tags">
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                />
              </div>
            </div>

            <div>
              <span className="form_tags">State / Province / Region</span>
              <div className="form_input_tags">
                <input
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  type="text"
                />
              </div>
            </div>

            <div>
              <span className="form_tags">Address Type</span>
              <div className="form_input_tags">
                <input
                  value={addressType}
                  onChange={(e) => setAddressType(e.target.value)}
                  type="text"
                  placeholder="Home / Office / Commercial "
                />
              </div>
            </div>

            <button
              onClick={addAddressClickHandler}
              className="add_address_btn "
              style={{ fontWeight: "bold" }}
            >
              ADD ADDRESS
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
