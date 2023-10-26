import React from "react";
import "./navcheckout.css";
import Checkbox from "../organisms/checkbox";

export default function NavProgressbar() {
  return (
    <div className="nav-checkout">
      <form className="nav-form">
        <Checkbox label={"Shipping"} checked={true} />
        <Checkbox label={"Payment"} checked={true} />
        <Checkbox label={"Review"} checked={true} />
      </form>
    </div>
  );
}
