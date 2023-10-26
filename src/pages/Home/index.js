import React from "react";
// import Button from "../../components/button";
import "./home.css";
// import '../../components/products/clearsp.png'
import Navs from "../../components/main-nav/main-nav";
import Banner from "./banner/banner";
// import Products from "../../components/products/A-product";
import ProContainer from "../../components/Landing/new-arrival/product-cont";
import Exotic from "../../components/Landing/Top-Exotic/exotic";
import Footer from "../../components/foot-nav/foot-nav";
import Viewmore from "../../components/view-more/view-more";
export default function Landing() {
  return (
    <div>
      <Navs need={true} />
      <Banner />
      <div className="header-cont">
        <h2 className="product-header">New Arrival</h2>
      </div>
      <ProContainer />
      <Exotic />
      <Viewmore />
      <Footer />
      {/* <Button title={"Button"} type={"submit"} className={"landing-btn"} /> */}
    </div>
  );
}
