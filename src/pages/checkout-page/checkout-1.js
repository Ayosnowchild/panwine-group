import React from "react";
import "./checkout-1.css";
import { Link } from "react-router-dom";
import NavProgressbar from "../../components/checkout-nav/navcheckout";
import Navs from "../../components/main-nav/main-nav";

export default function Shipping() {
  return (
    <div className="check-main">
      <Navs />
      <NavProgressbar />
      <div className="container-1">
        <div className="ship-card">
          <p className="text-1">Shipping Details</p>
          <form className="ship-form">
            <div className="ship-inputs">
              <label className="text-2">Full-Name</label>
              <input className="input-1" placeholder="Full-Name" />
            </div>
            <div className="ship-inputs">
              <label className="text-2">Phone</label>
              <input className="input-1" placeholder="Phone" />
            </div>
            <div className="ship-inputs">
              <label className="text-2">Address</label>
              <input className="input-1" placeholder="Address" />
            </div>
            <div className="ship-inputs">
              <label className="text-2">Country</label>
              <input className="input-1" placeholder="Country" />
            </div>
            <br />
            <Link to={"/checkout-2"}>
              <button className="shipping-btn">Confirm & Continue</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
