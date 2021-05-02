import { Link } from "react-router-dom";
import { useAuth } from "../authContext";
import "./Login.css";

export function ProfilePage() {
  const { login } = useAuth();
  const userId = JSON.parse(localStorage.getItem("user"));
  return (
    <>
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
              {userId === null ? "user" : userId[0].name}
            </div>
          </div>
          <div className="userContent">
            <div> Email ID</div>

            <div className="text_bold" style={{ marginLeft: "10px" }}>
              {userId === null ? "user" : userId[0].email}
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
        
            className="add-to-chart-btn "
            style={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            UPDATE
          </button>
        </form>
      </div>
    </>
  );
}