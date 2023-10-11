import React from 'react'
import "./product-cont.css"
import Products from '../A-product/A-product'

function ProContainer(props) {
  return (
    <div className='product-large'>
        <div className='container-row'>
            <div className='header-cont'>
                <h2 className='product-header'>{props.prodhead}</h2>
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
                        img="../images/clearsp2.png"
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
                        img="../images/clearsp2.png"
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
                        img="../images/clearsp2.png"
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
                        img="../images/clearsp2.png"
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

export default ProContainer