import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="Lcontainer">
      {/* <nav class="Hot-Nav">
        <div class="Panwine">
          <h1>PanWines</h1>
        </div>
      </nav> */}
      <div class="login">
        <div class="login1">
          <h1 class="login2">PanWines</h1>
          <img src="./Rec.png" alt="wine" />
        </div>
        <div class="loginn">
          <h1>Sign In To Panwine</h1>
          <form>
            <input
              class="logini"
              type="email"
              placeholder="Email Address"
              name="email"
            />
            <input
              class="logini"
              type="password"
              placeholder="Password"
              name="password"
            />
            <button class="loginb" type="submit">
              Sign In
            </button>
            <div class="loginl">
              Dont have an Account?
              <Link id="hh" to={"/Signup"}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
