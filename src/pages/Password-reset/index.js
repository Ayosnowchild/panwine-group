import React from "react";
import { Link } from "react-router-dom";
import "./password.css";

export default function Password() {
  return (
    <div className="Pcontainer">
      {/* <nav class="Hot-Nav">
        <div class="Panwine">
          <h1>PanWines</h1>
        </div>
      </nav> */}

      <div class="Password">
        <div class="Password1">
          <h1 class="Password2">PanWines</h1>
          <img src="./Rec.png" alt="wine" />
        </div>
        <div class="Passwordn">
          <h1 className="Passwordr">Reset Password</h1>
          <form>
            <p className="Passworde">Email</p>
            <input
              class="Passwordi"
              type="email"
              placeholder="Email Address"
              name="email"
            />
            <p className="Passworde">Email</p>
            <input
              class="Passwordi"
              type="num"
              placeholder="Phone Number"
              name="num"
            />
            <button class="Passwordb" type="submit">
              Submit
            </button>
            <div class="Passwordl">
              Already have an Account?
              <Link id="hh" to={"/Login"}>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
