import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import { AllProductsContext } from '../contexts/contexts'
import ProductCard from '../components/ProductCard'

const ProductsView = () => {
  const items= useContext(AllProductsContext)

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products"/>
      <div className="product-grid container">
        <div className="container">
          <h1>Products</h1>
          <div className="row row-cols-1 row-cols-md-4 ">
            {
            items.map(product => <ProductCard key={product.articleNumber} item={product} />)
            }
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  )
}

export default ProductsView