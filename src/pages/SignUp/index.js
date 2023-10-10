import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

export default function SignUp(props) {
  return (
    <div className="Scontainer">
      {/* <nav class="Hot-Nav">
        <div class="Panwine">
          <h1>PanWines</h1>
        </div>
      </nav> */}
      <div class="Signup">
        <div class="Signup1">
          <h1 class="Signup2">PanWines</h1>
          <img src="./Rec.png" alt="wine" />
        </div>
        <div class="Signupn">
          <h1>Create An Account</h1>
          <form>
            <input
              class="Signupi"
              type="email"
              placeholder="Full Name"
              name="email"
            />
            <input
              class="Signupi"
              type="num"
              placeholder="Phone Number"
              name="num"
            />
            <input
              class="Signupi"
              type="email"
              placeholder="Email Address"
              name="email"
            />
            <input
              class="Signupi"
              type="password"
              placeholder="Password"
              name="password"
            />
            <h1 class="Signupf">
              <Link id="hh" to={"/password"}>
                Forget Password?
              </Link>
            </h1>
            <button class="Signupb" type="submit">
              Create Account
            </button>
            <h1 id="Or">Or</h1>
            <div>
              <button class="Signupl">{props.goog} Sign up with Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
