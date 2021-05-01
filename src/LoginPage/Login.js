import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";
import "./Login.css";

export function Login() {
  const {
    login,
    inputPass,
    loginUserWithCredentials,
    setInputPass,
    inputText,
    setInputText,
    signOutHandler
  } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");

  function loginClickHandler(event) {
    loginUserWithCredentials(inputText, inputPass);
    navigate(state?.from ? state.from : "/products");
    if (!login) {
      navigate("/login");
      setInputPass(null);
      setInputText(null);
      event.preventDefault();
      setErrorText("Username or Password Is Incorrect");
    }
  }
  const userId = JSON.parse(localStorage.getItem("user"));
  console.log(userId);
  return (
    <>
      <div className="login-div">
        {!login && (
          <div className="signupScreen">
            <form>
              <h2>
                SIGN IN TO <span className="text_bold"> PLACE ORDER</span>
              </h2>
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
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
                <div>
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {errorText}
                  </span>
                </div>
                <span>Not a Member ?</span>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <span className="text_bold">SIGN UP</span>
                </Link>{" "}
              </div>
              <button
                onClick={loginClickHandler}
                className="add-to-chart-btn "
                style={{ fontWeight: "bold", marginTop: "1rem" }}
              >
                {login ? "Siggned in" : "Sign in"}
              </button>
            </form>
          </div>
        )}

        {login && (
          <div className="signupScreen">
            <form>
              <div style={{ borderBottom: "1px solid #eaeaec" }}>
                <h1 style={{ fontWeight: "lighter", color: "#282C3F" }}>
                  PROFILE DETAILS
                </h1>
              </div>

              <div className="userContent">
                <div> NAME </div>

                <div className="text_bold" style={{ marginLeft: "1rem" }}>
                  USER
                </div>
              </div>
              <div className="userContent">
                <div> Email ID</div>

                <div className="text_bold" style={{ marginLeft: "10px" }}>
                  User@gmail.com
                </div>
              </div>
              <div className="userContent">
                <div>Date of birth</div>

                <div className="text_bold" style={{ marginLeft: "10px" }}>
                  13/10/1999
                </div>
              </div>
              <div className="userContent">
                <div>Gender</div>

                <div className="text_bold" style={{ marginLeft: "10px" }}>
                  <span
                    class="iconify"
                    data-icon="ic:baseline-male"
                    data-inline="false"
                  ></span>
                </div>
              </div>
              <div className="userContent">
                <div> Mobile Number</div>

                <div className="text_bold" style={{ marginLeft: "10px" }}>
                  9922387109
                </div>
              </div>
              <div className="userContent">
                <div> Alternate Mobile</div>

                <div className="text_bold" style={{ marginLeft: "10px" }}>
                  -
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <span>Hope to see you soon. </span>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <span className="text_bold">Take Care !!</span>
                </Link>
              </div>
              <button
                onClick={signOutHandler}
                className="add-to-chart-btn "
                style={{ fontWeight: "bold", marginTop: "1rem" }}
              >
                SIGN OUT
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
