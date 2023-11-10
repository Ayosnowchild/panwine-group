import React from "react";
import "./category.css";
// import Button from '../button'
function Categoty() {
  return (
    <div className="cate-container">
      <div className="category-btn">
        <p className="category-text">Category</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="8" fill="#E1E1E1" />
        </svg>
      </div>
      <div className="color-container">
        <p className="color-name">Red Wine</p>
        <p className="color-name">White Wine</p>
        <p className="color-name">Rose Wine</p>
        <p className="color-name">Sparkling Wine</p>
        <p className="color-name">Fortified Wine</p>
        <p className="color-name">Whiskey</p>
        <p className="color-name">Vodka</p>
        <p className="color-name">Rum</p>
        <p className="color-name">Gin</p>
        <p className="color-name">Tequila</p>
      </div>

      <div className="filter-container">
        <p className="filter-text">Filter</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="8" fill="#E1E1E1" />
        </svg>
      </div>
    </div>
  );
}

export default Categoty;
