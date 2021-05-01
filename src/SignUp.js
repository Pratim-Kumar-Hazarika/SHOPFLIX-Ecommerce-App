import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage/Login.css";

export function SignUp() {
  const navigate = useNavigate();
  async function signUpClickHandler(event) {
    event.preventDefault();
    try {
      const res = await axios.post(
        "https://Ecommerce-Backend.prratim.repl.co/users",
        {
          name: inputName,
          password: inputPass,
          email: inputEmail
        }
      );
      if (res.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      setEmailError("Please Enter Valid Email");
      console.log("error", error);
    }
  }
  const [inputName, setInputName] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  return (
    <>
      <div className="login-div">
        <div className="signupScreen">
          <form>
            <h1>
              SIGN <span className="text_bold">UP</span>
            </h1>
            <input
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              type="text"
              placeholder="Enter Name"
            />
            <input
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              type="text"
              placeholder="Enter Email"
            />
            <input
              value={inputPass}
              onChange={(e) => setInputPass(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />
            <div>
              <span style={{ color: "red", fontWeight: "bold" }}>
                {emailError}
              </span>
            </div>
            <button
              onClick={signUpClickHandler}
              className="add-to-chart-btn "
              style={{ fontWeight: "bold" }}
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
