import React from 'react'

function ProductDetails({productdata}) {
  return (
    <div className="ProductItem">
              {productdata.map((element) => {
                return (
                  <div className="Item">
                    <img
                      src={element.image}
                      width="100%"
                      height={200}
                      alt="productimage"
                    />
                    <h4>{element.title}</h4>
                    <h3>
                      Price: $
                      <span style={{ color: "gray" }}>{element.price}</span>
                    </h3>
                    <button>Product Details</button>
                  </div>
                );
              })}
            </div>
  )
}

export default ProductDetails
