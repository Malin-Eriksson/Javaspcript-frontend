import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import { useProductContext } from '../contexts/ProductContext'

const ProductDetailsView = () => {
    const {articleNumber} = useParams()
    const {product, getProduct} = useProductContext ()
      
useEffect(() => {
  getProduct(articleNumber)

}, [])

  return (
    <>
        <MainMenuSection />
        <BreadcrumbSection parentPage="Products" currentPage={product.name}/>
        <ProductDetailsSection products={product}/>
        <FooterSection />
    </>
  )
}

export default ProductDetailsView



