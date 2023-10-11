import React from 'react'
import "./checkout-4.css"
import { Link } from 'react-router-dom'

export default function Order() {
  return (
    <div>
         <div className='container-4'>
          <h2 className='order-t1'>Please confirm and submit your order</h2>
          <p className='order-t2'>By clicking submit order, you agree to terms of Use and privacy policy</p>
          <form className='order-form'>
            <div className='order-input1'>
                <div className='order-inputA'>
                <p className='order-name'>Payment</p>
                <input className='order-card1' name='text' placeholder='****** 8657'/>
                </div>
            <div className='order-inputB'>
                <p className='order-name2'>Edit</p><br/>
                <input className='order-card1B' type='month' placeholder='MM/YY'/>
            </div>
            </div>
            <div className='order-input2'>
                <div>
                <h4 className='order-name3'>Shipping Address</h4>
                <p className='order-name4'>Name of Country</p>
                </div>
                <div>
                    <p className='order-name5'>Edit</p>
                    <input className='order-card4' name='text' placeholder='lawrence kinsley'/>
                </div>
                
            </div>
            <h3 className='order-t3'>Order Summary</h3>
          <div className='t1'><p>Subtotal</p><p>$4,200</p></div>
          <div className='t2'><p>Delivery</p><p>$200</p></div>
          <div className='t3'><h3 className='h3'>Grand Total</h3><p>$4,400</p></div>
          </form>
          
        </div>
         <Link to={"/checkout-5"}><button className='order-btn'>Submit Order</button></Link>
    </div>
  )
}
