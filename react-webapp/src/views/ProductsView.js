import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import { useProductContext } from '../contexts/ProductContext'
import ProductGridSection from '../sections/ProductGridSection'

const ProductsView = () => {
  const {products, getProducts} = useProductContext()

  useEffect(() => {
    getProducts()
  }, [])

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