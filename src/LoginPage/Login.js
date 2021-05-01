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
              <h2>
                THANK YOU FOR VISITING <span className="text_bold"> US</span>{" "}
                AND MAKING YOUR FIRST PURCHASE!!
              </h2>
              <div>
                <span>Hope to see you soon. </span>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <span className="text_bold">Take Care !!</span>
                </Link>{" "}
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
