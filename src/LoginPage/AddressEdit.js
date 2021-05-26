import { useState } from "react";
import "../LoginPage/Address.css";
import axios from "axios";
import { CountryDropdown } from "react-country-region-selector";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../cartContext";
export function AddressEdit() {
  const navigate = useNavigate();
  const getUserAddress = JSON.parse(localStorage.getItem("useraddress"));

  const [country, setCountry] = useState(getUserAddress.country);
  const [fullName, setFullName] = useState(getUserAddress.fullName);
  const [mobileno, setMobileNo] = useState(getUserAddress.phone);
  const [pincode, setPinCode] = useState(getUserAddress.pincode);
  const [apartmentNo, setApartmentNo] = useState(getUserAddress.flatNo);
  const [landmark, setLandmark] = useState(getUserAddress.landmark);
  const [city, setCity] = useState(getUserAddress.city);
  const [region, setRegion] = useState(getUserAddress.state);
  const [addressType, setAddressType] = useState(getUserAddress.addressType);
  const userId = JSON.parse(localStorage.getItem("user"));
  async function updateAddressClickHandler(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://Ecommerce-Backend.prratim.repl.co/users/${userId[0]._id}/address/update`,
        {
          _id: getUserAddress._id,
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
        console.log("updated...", response);
        localStorage.removeItem("useraddress");
        navigate("/address");
      }
    } catch (error) {
      console.log("Error while updating the address..");
    }
  }

  return (
    <>
      <div className="login-div add_div">
        <div className="signupScreen add_screen">
          <form className="add_form">
            <h1>
              Edit <span className="text_bold">your address</span>
            </h1>
            <div>
              <span className="form_tags">Country/Region</span>
              <div>
                <CountryDropdown
                  className="form_input_tags select_tag"
                  value={country}
                  onChange={(value) => setCountry(value)}
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
              onClick={updateAddressClickHandler}
              className="add-to-chart-btn "
              style={{ fontWeight: "bold" }}
            >
              SAVE CHANGES
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
