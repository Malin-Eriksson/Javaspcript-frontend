import React from 'react'


const ProductDetailsSection = ({item}) => {
  return (
    <section className='product-details'>
      <div className='container'>
        <div>
          <div>{item.name}</div>
          <img src={item.imageName} />
        </div>
      </div>
    </section>
  )
}


export default ProductDetailsSection
