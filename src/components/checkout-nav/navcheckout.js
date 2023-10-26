import React from 'react'
import "./navcheckout.css"

export default function NavProgressbar() {
  return (
    <div className='nav-checkout'>
        <form className='nav-form'>
            <div>
                <input className="checkmark" type='checkbox' name='pro1'/>
                <label className='nav-text1' for="pro1">Shipping</label>
            </div>
            <div>
            <input className='nav-input2' type='checkbox' name='pro2'/>
            <label className='nav-text2' for="pro2">Payment</label>
            </div>
            <div>
            <input className='nav-input3' type='checkbox' name='pro3'/>
            <label className='nav-text3' for="pro3">Review</label>
            </div>
        </form>
    </div>
  )
}
