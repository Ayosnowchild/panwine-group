import React from 'react'
import "./checkout-5.css"
import { Link } from 'react-router-dom'
import NavProgressbar from '../../../components/checkout-nav/navcheckout'
export default function Reciept() {
  return (
    <div>
      <NavProgressbar/>
      <div className='container-5'>
        <img className='reciept-image' src='../images/mark.jpg' alt='mark-icon'/>
        <h1 className='reciept-text1'>Transaction Successful</h1>
        <p className='reciept-text2'>Your payment has been recieved and you will get a notification for your order's Progress</p>
         <Link to={"/print-reciept"}><button className='reciept-btn1'>Print Reciept</button></Link>
         <Link to={"/Home"}><button className='reciept-btn2'>Go Back Home</button></Link>
    </div>

    </div>
    
  )
}
