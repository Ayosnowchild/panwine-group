import React from 'react'
import "./exotic.css"
import Products from '../A-product/A-product'

function Exotic() {
  return (
    <div className='product-large'>
        <div className='container-row'>
            <div className='header-cont'>
                <h2 className='product-header'>Top Exotics</h2>
            </div>
            <div className='product-cont'> 
                <div className='row-product'>
                    <div className='single-product'>
                        <Products
                        img="../images/clearsp.png"
                        prodname="Clearsprings"
                        smallname="Clearsprings"
                        />
                    </div> 

                    <div className='single-product'>
                        <Products
                        img="../images/clearsp.png"
                        prodname="Clearsprings"
                        smallname="Clearsprings"
                        />
                    </div> 

                    <div className='single-product'>
                        <Products
                        img="../images/clearsp.png"
                        prodname="Clearsprings"
                        smallname="Clearsprings"
                        />
                    </div> 

                    <div className='single-product'>
                        <Products
                        img="../images/clearsp.png"
                        prodname="Clearsprings"
                        smallname="Clearsprings"
                        />
                    </div> 
                </div>
                
            </div>

            <div className='product-cont'> 
                <div className='row-product'>
                    <div className='single-product'>
                        <Products
                        img="../images/clearsp.png"
                        prodname="Clearsprings"
                        smallname="Clearsprings"
                        />
                    </div> 

                    <div className='single-product'>
                        <Products
                        img="../images/clearsp.png"
                        prodname="Clearsprings"
                        smallname="Clearsprings"
                        />
                    </div> 

                    <div className='single-product'>
                        <Products
                        img="../images/clearsp.png"
                        prodname="Clearsprings"
                        smallname="Clearsprings"
                        />
                    </div> 

                    <div className='single-product'>
                        <Products
                        img="../images/clearsp.png"
                        prodname="Clearsprings"
                        smallname="Clearsprings"
                        />
                    </div> 
                </div>
                
            </div>

            
            
           
        </div>
    </div>
  )
}

export default Exotic