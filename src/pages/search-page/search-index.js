import React from 'react'
import "./search-page.css"
import Navs from '../../components/main-nav/main-nav'
import ProContainer from '../../components/products/new-arrival/product-cont'
import Footer from '../../components/foot-nav/foot-nav'
import Categoty from '../../components/category-filter/categoty'

function Searchpage() {
  return (
    <div>
        <Navs/>
        <div className='search-result'>
        <h1 className='search-result-par'>Search Results</h1>
        </div>
        
        <Categoty/>
        <ProContainer/>
        <Footer/>

    </div>
  )
}

export default Searchpage