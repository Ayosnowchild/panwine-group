import React from "react";
import "../Productupload/productupload.css";
import { Link } from "react-router-dom";
import Button from "../../components/button";

function Productupload(Landing) {
  return (
    <div className="productup11">
      <p className="productup1">Upload photo</p>
      <div className="productup2">
        <form className="productup3">
          <input
            type="productname"
            placeholder="Product Name"
            name="productname"
          />
          <input
            type="productprice"
            placeholder="Product Price"
            name="productprice"
          />
          <input type="category" placeholder="Category" name="category" />
          <input type="stock" placeholder="Stock" name="stock" />
        </form>
      </div>
      <div className="productup4">
        <p className="productup5">Click to select image</p>
        <p className="productup6">Browse</p>
      </div>
      {/* <button className="productup7">Upload</button> */}
      <Link className="link" to="/">
        <Button title={"Upload"} type={"submit"} className={"productup7"} />
      </Link>
    </div>
  );
}

export default Productupload;
