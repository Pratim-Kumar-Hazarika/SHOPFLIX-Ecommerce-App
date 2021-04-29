import { Link } from "react-router-dom";
import "./Login.css";

export function Login() {
  return (
    <>
      <div className="login-div">
        <div className="signupScreen">
          <form>
            <h2>
              SIGN IN TO <span className="text_bold"> PLACE ORDER</span>
            </h2>
            <input type="text" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <div>
              <span>Not a Member ?</span>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <span className="text_bold">SIGN UP</span>
              </Link>{" "}
            </div>
            <button
              className="add-to-chart-btn "
              style={{ fontWeight: "bold", marginTop: "1rem" }}
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
