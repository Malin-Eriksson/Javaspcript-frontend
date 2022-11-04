import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import FooterSection from '../sections/FooterSection'
import { ProductsContext } from '../contexts/contexts'

const ProductsView = () => {
  const products = useContext(ProductsContext)

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products"/>
      <ProductGridSection title="Products" items={products} />
      <FooterSection />
    </>
  )
}

export default ProductsView