import React from "react";
import "./addcart.css";
// import { countcontext } from '../../../App';
// import Button from '../button';
export default function Addcart() {
  return (
    <div className="count-con">
      <div className="addcart-cont">
        <div className="cart-btn ">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="8" fill="#F9E3F0" />
            <path
              d="M9 16H23"
              stroke="#411530"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {/* <button className={"cart-btn"} onClick={minus}>-</button> */}
        <p className="count-box">100</p>
        <div className="cart-btn ">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="8" fill="#F9E3F0" />
            <path
              d="M16 9V23M9 16H23"
              stroke="#411530"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <p className="pro-price">#12,400.00</p>
    </div>
  );
}
