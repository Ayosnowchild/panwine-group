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
    <div>
        <div className='count-con'>
        <button className={"cart-btn"} onClick={minus}>-</button>
        <p className='count-box'>{count}</p>
        <button className={"cart-btn"} onClick={add}>+</button>
        </div>
        
    </div>
  );
}
