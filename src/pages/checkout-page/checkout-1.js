import React from 'react'
import "./checkout-1.css"
import { Link } from 'react-router-dom'
import NavProgressbar from '../../components/checkout-nav/navcheckout'

export default function Shipping() {
  return (
    <div>
      <NavProgressbar/>
      <div className='container-1'>
        <h1 className='text-1'>Shipping Details</h1>
        <form>
          <label><p className='text-2'>Full-Name</p><input className='input-1' placeholder='Full-Name'/></label>
          <label><p className='text-3'>Phone</p><input className='input-2' placeholder='Phone'/></label>
          <label><p className='text-4'>Address</p><input className='input-3' placeholder='Address'/></label>
          <label><p className='text-5'>Country</p><input className='input-4' placeholder='Country'/></label><br/>
          <Link to={'/checkout-2'}><button className='shipping-btn'>Confirm & Continue</button></Link>
        </form>
      </div>
    </div>
  )
}
