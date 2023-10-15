import React from 'react'
import './Buttons.css'

function Buttons({getProductsData, setProductData}) {
  return (
    <div>
      <button id="electronic" onClick={() =>{
            getProductsData("electronics", setProductData)
          }}>
         
            Electronics
          </button>
          <button id="jewelery" onClick={() =>{
            getProductsData("jewelery",setProductData)
          }}>
            Jewelery
          </button>
          <button id="mensclothing" onClick={() =>{
            getProductsData("men's clothing",setProductData)
          }}>
         
            Men's Clothing
          </button>
          <button id="womensclothings" onClick={() =>{
           getProductsData("women's clothing",setProductData)
          }}>
         
            Women's Clothing
          </button>
    </div>
  )
}

export default Buttons
