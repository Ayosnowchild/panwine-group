import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

export default function Sign() {
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
          <h1 className="Signupc">Create Account</h1>
          <form>
            <p className="logine">Full Name</p>
            <input
              class="Signupi"
              type="email"
              placeholder="Full Name"
              name="email"
            />
            <p className="Signupe">Phone Number</p>
            <input
              class="Signupi"
              type="num"
              placeholder="Phone Number"
              name="num"
            />
            <p className="Signupe">Email</p>
            <input
              class="Signupi"
              type="email"
              placeholder="Email Address"
              name="email"
            />
            <p className="Signupe">Password</p>
            <input
              class="Signupi"
              type="password"
              placeholder="Password"
              name="password"
            />
            <button class="Signupb" type="submit">
              Create Account
            </button>
            <div>
              <button class="Signupl">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.803 8.12475C19.9305 8.79419 20 9.49411 20 10.2245C20 15.9376 16.0981 20 10.2047 20C8.86452 20.0004 7.53735 19.742 6.29907 19.2396C5.06079 18.7372 3.93567 18.0006 2.98799 17.072C2.04031 16.1433 1.28865 15.0407 0.775958 13.8273C0.263266 12.6139 -0.00040815 11.3133 4.74216e-07 10C-0.00040815 8.68667 0.263266 7.38613 0.775958 6.17269C1.28865 4.95926 2.04031 3.85671 2.98799 2.92804C3.93567 1.99937 5.06079 1.26279 6.29907 0.76039C7.53735 0.257984 8.86452 -0.000399962 10.2047 4.64702e-07C12.9601 4.64702e-07 15.2625 0.9935 17.029 2.60666L14.1523 5.42564V5.41853C13.0814 4.41894 11.7224 3.90593 10.2047 3.90593C6.83771 3.90593 4.10097 6.69342 4.10097 9.99391C4.10097 13.2934 6.83771 16.087 10.2047 16.087C13.2597 16.087 15.3392 14.3753 15.7663 12.0246H10.2047V8.12475H19.8041H19.803Z"
                    fill="#80295E"
                  />
                </svg>
                <span>Sign up with Google</span>
              </button>
            </div>

            <div class="Signupl">
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
