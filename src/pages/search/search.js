import React from "react";
import "./search.css";
import Navs from "../../components/main-nav/main-nav";
import ProContainer from "../../components/Landing/new-arrival/product-cont";
import Footer from "../../components/foot-nav/foot-nav";
import Categoty from "../../components/category-filter/categoty";
import Viewmore from "../../components/view-more/view-more";
function Search() {
  return (
    <div>
      <Navs />
      <div className="search-result">
        <h1 className="search-result-par">Search Results</h1>
      </div>
      <Categoty />
      <ProContainer />
      <Viewmore />
      <Footer />
    </div>
  );
}

export default Search;
