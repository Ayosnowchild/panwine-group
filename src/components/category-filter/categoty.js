import React from 'react'
import "./category.css"
import Button from '../button'
function Categoty() {
  return (
    <div className='cate-container'>
        <div>
            <button type='submit' className='category-btn'><p className='category-text'>Category</p> <Button title={" "} type={"submit"} className={"empty-btn"} /></button>
        
        </div>
    </div>
  )
}

export default Categoty