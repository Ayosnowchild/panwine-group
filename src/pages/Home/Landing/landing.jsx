import React from 'react'
import './landing.css'
import Button from '../../../components/button'
// import { Link } from 'react-router-dom'
export default function Intro() {
  return (
    <div>
        <div className='intro'>
          <div className='para1'>
            <p>Tastefulness & Elegance <br/>of a Best Wine</p>
          </div>
          <div className='para2'>
            <p>Browse our collection to find that delectable taste you desire</p>
          </div>
          <div className='para4'>
          <Button title={"Explore Product"} type={"submit"} className={"parab"} />
          </div>

        </div>
    </div>
  )
}
