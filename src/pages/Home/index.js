import React from "react";
// import Button from "../../components/button";
import "./home.css";
// import '../../components/products/clearsp.png'
import Navs from "../../components/main-nav/main-nav";
import Intro from "./Landing/landing";
// import Products from "../../components/products/A-product";
import ProContainer from "../../components/products/new-arrival/product-cont";
import Exotic from "../../components/products/Top-Exotic/exotic";
import Footer from "../../components/foot-nav/foot-nav";

export default function Landing() {
  return (
    <div>
      <Navs/>
      <Intro/>
      <ProContainer
      prodhead = "New Arrival"/>
      <Exotic/>
      <Footer/>
      {/* <Button title={"Button"} type={"submit"} className={"landing-btn"} /> */}
    </div>
  );
}
