import React from "react";
import "./A-product.css";
import Addcart from "../Addcart/addcart";

function Products(props) {
  return (
    <div className="productp">
      <div className="prod-cont">
        <img src={props.img} alt="products" className="prod-img" />
        <div className="name-container">
          <p className="big-name">{props.prodname}</p>
          <p className="small-name">{props.smallname}</p>
        </div>

        <Addcart />
      </div>
    </div>
  );
}

export default Products;
