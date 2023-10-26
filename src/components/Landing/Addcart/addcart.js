import React, { useContext } from 'react'
import './addcart.css'
import { countcontext } from '../../../App';
// import Button from '../button';
export default function Addcart() {
    const {count, setCount} = useContext(countcontext);
    let add = ()=> {
        setCount((prev) => prev + 1);
    }
    
    let minus = ()=> {
        setCount((prev) => prev - 1);
    }
    
  return (
        <div className='count-con'>
        <svg  onClick={minus} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#F9E3F0"/>
          <path d="M9 16H23" stroke="#411530" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        {/* <button className={"cart-btn"} onClick={minus}>-</button> */}
        <p className='count-box'>{count}</p>

        <svg onClick={add} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#F9E3F0"/>
          <path d="M16 9V23M9 16H23" stroke="#411530" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        {/* <button className={"cart-btn"} onClick={add}>+</button> */}
        </div>
        
  );
}
