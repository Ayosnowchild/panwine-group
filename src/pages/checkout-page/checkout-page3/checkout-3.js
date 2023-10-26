import React from "react";
import "./checkout-3.css";
import { Link } from "react-router-dom";
import NavProgressbar from "../../../components/checkout-nav/navcheckout";

export default function Card() {
  return (
    <div className="card-page">
      <NavProgressbar />
      <div className="container-3">
        <h2 className="payment-text">Choose a payment method</h2>
        <p className="payment-text2">
          You will not be charged until you confirm your order on the next page{" "}
        </p>
        <form>
          <input
            className="card-input"
            type="radio"
            id="card"
            checked={true}
            name="card"
            value="Credit-card"
          />
          <label for="card">Credit-card</label>
          <br />
          <label>
            <input className="card-input2" placeholder="Name on Card" />
          </label>
          <br />
          <label>
            <input className="card-input3" placeholder="Security Code" />
          </label>
          <br />
          <label>
            <input className="card-input4" placeholder="Card-Number" />
          </label>
          <label>
            <input className="card-input5" placeholder="Expiration Date" />
          </label>
          <br />
        </form>
      </div>
      <div className="cardbtn">
        <Link to={"/checkout-4"}>
          <button className="card-btn">Confirm & Continue</button>
        </Link>
      </div>
    </div>
  );
}
