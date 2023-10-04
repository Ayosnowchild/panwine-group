import React from "react";
import Button from "../../components/button";
import "./landing.css";

export default function Landing() {
  return (
    <div>
      <h1>Hello world</h1>
      <Button title={"Button"} type={"submit"} className={"landing-btn"} />
    </div>
  );
}
