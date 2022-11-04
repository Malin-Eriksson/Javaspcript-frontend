import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { FeaturedContext } from '../contexts/contexts'

const ProductGridSection = ({title}) => {

  const items = useContext(FeaturedContext)
  
  return (
    <section className="product-grid container">
      <div className="container">
      <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {
            items.map(product => <ProductCard key={product.articleNumber} item={product} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ProductGridSection