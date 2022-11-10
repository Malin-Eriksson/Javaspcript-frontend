import React from 'react'
import { useProductContext } from '../contexts/ProductContext'


const ProductDetailsSection = () => {
  const {products} = useProductContext()

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

