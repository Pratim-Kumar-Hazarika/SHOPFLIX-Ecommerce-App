import "./Login.css";

export function SignUp() {
  return (
    <>
      <div className="login-div">
        <div className="signupScreen">
          <form>
            <h1>
              SIGN <span className="text_bold">UP</span>
            </h1>
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <button
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
