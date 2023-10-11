import React from 'react'
import "./checkout-2.css"
import { Link } from 'react-router-dom'

export default function Payment() {
  return (
    <div>
        <div className='container-2'>
            <h2 className='payment-text'>Choose a payment method</h2>
            <p className='payment-text2'>You will not be charged until you confirm your order on the next page  </p>
            <form className='payment-form'>
                <input className='in-1' type='radio' id='card1' name='card' value="Credit-card" />
                <label for="card1">Credit-card</label><br/>
                <input type='radio' id='card2'name='card' value="Apple-pay" className='in-2'/>
                <label for="card2">Apple-pay</label><br/>
                <input type='radio' id='card3' name='card' value="PayPal" className='in-3'/>
                <label for="card3">PayPal</label><br/>
                <input type='radio' id='card4' name='card' value="Pay-stack" className='in-4'/>
                <label for="card4">Pay-stack</label><br/>
                
            </form>
            <Link to={"/checkout-3"}><button className='payment-btn'>Confirm & Continue</button></Link>
        </div>
    </div>
  )
}
