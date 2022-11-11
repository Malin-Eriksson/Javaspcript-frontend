import React from 'react'
import { useProductContext } from '../contexts/ProductContext'


const ProductDetailsSection = ({products}) => {


  return (
    <section className='product-details'>
      <div className='container'>
        <div>
          <div>{products.name}</div>
          <img src={products.imageName} />
        </div>
      </div>
    </section>
  )
}


export default ProductDetailsSection

