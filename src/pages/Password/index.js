import React from "react";
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
          <h1>Reset Password</h1>
          <form>
            <input
              class="Passwordi"
              type="password"
              placeholder="Old Password"
              name="password"
            />
            <input
              class="Passwordi"
              type="password"
              placeholder="New Password"
              name="password"
            />
            <input
              class="Passwordi"
              type="password"
              placeholder="Confirm Password"
              name="password"
            />
            <button class="Passwordb" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
