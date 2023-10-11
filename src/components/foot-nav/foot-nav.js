import React from 'react'
import "./foot-nav.css"

function Footer() {
  return (
    <div className='Foot-nav-container'>
        <div className='right-side'>
            <p className='foot-logo'>PanWines</p>
            <p className='footer-para'>
            Home for luxury wines and<br/> liquors for that special <br/>celebration
            </p>
        </div>
        <div className='left-side'>
            <div className='list1'>
                <ul className='lists1'>
                    <p className='footlist-homepage'>Homepage</p>
                    <li className='footlist1'>Home</li>
                    <li className='footlist1'>Authentication</li>
                    <li className='footlist1'>Products</li>
                    <li className='footlist1'>Shopping</li>
                </ul>
            </div>

            <div className='lists2'>
                <ul className='list2'>
                    <p className='footl-contact'>Contact Us</p>
                    <li className='footlist1'>info@panwine.co</li>
                    <li className='footlist1'>https://panwine.com</li>
                    <li className='footlist1'>+234 812 345 6789</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer