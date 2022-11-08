import React from 'react'

const ProductDetailsSection = ({products}) => {
  return (
    <div className='container mt-5'>
        <div>
            <h1>{products.name}</h1>
            <img src={products.imageName} alt={products.name}/>
        </div>
    </div>
  )
}


export default ProductDetailsSection
