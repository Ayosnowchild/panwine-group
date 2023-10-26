import React from 'react'
import './A-product.css'
import Addcart from '../Addcart/addcart'

function Products(props) {
  return (
    <div className='productp'>
        <div className='prod-cont'>
        <img src={props.img} className='prod-img'/>
        <p className='big-name'>{props.prodname}</p>
        <p className='small-name'>{props.smallname}</p>
        <div className='addcart-cont'>
            <Addcart/>
            <p className='pro-price'>#12,400.00</p>
        </div>
        </div>
    </div>
  )
}

export default Products