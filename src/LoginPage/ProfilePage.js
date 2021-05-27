import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../authContext";
import "./Login.css";

export function ProfilePage() {
  const { signOutHandler, login } = useAuth();
  const userId = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="signupScreen">
        <form>
          <div style={{ borderBottom: "1px solid #eaeaec" }}>
            <h1 style={{ fontWeight: "lighter", color: "#282C3F" }}>
              PROFILE DETAILSS
            </h1>
          </div>

          <div className="userContent">
            <div> NAME </div>

            <div className="text_bold" style={{ marginLeft: "1rem" }}>
            {userId === null ? "User" : userId[0].name.toUpperCase()}
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
         
          <button
            onClick={signOutHandler}
            className="signout_btn "
            style={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            UPDATE
          </button>
        </form>
      </div>
    </>
  );
}
