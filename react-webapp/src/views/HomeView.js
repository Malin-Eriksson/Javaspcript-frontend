import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import BannerSection from '../sections/BannerSection'
import ProductDisplaySection1 from '../sections/ProductDisplaySection1'
import ProductDisplaySection2 from '../sections/ProductDisplaySection2'
import ShopInfoSection from '../sections/ShopInfoSection'
import { useProductContext } from '../contexts/ProductContext'
import FeaturedProductsSection from '../sections/FeaturedProductsSection'



const HomeView = () => {
  const {featuredProducts, getFeaturedProducts, productDisplay1, productDisplay2, getProductDisplay1, getProductDisplay2} = useProductContext()

  useEffect(() => {
    getFeaturedProducts(8)
  }, [])

  useEffect(() => {
    getProductDisplay1(4)
  }, [])

  useEffect(() => {
    getProductDisplay2(4)
  }, [])


    return (
      <>
        <section className='gradient-grey'><MainMenuSection /></section>
        <ShowcaseSection />
        <FeaturedProductsSection title="Featured Products" items={featuredProducts}/>
        <BannerSection />
        <ProductDisplaySection1 title="2 FOR USD $29" items={productDisplay1}/>
        <ProductDisplaySection2 title="2 FOR USD $49" items={productDisplay2}/>     
        <ShopInfoSection />
        <FooterSection />
      </>
      
    )
}


export default HomeView