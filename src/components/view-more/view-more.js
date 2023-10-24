import React from 'react'
import "./view-more.css"
import { Link } from "react-router-dom";

export default function Viewmore() {
  return (
    <div className='view-container'>
        <div className='view-more'>
            <p className='view-text'><Link to={"./search"} className='link-search'>View more</Link></p>
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="29" height="29" transform="translate(0 0.5)" fill="#E1E1E1"/>
            </svg>

        </div>

    </div>
  )
}
