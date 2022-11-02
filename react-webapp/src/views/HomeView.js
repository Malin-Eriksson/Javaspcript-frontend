import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import BannerSection from '../sections/BannerSection'
import ProductDisplaySection1 from '../sections/ProductDisplaySection1'
import ProductDisplaySection2 from '../sections/ProductDisplaySection2'
import ShopInfoSection from '../sections/ShopInfoSection'
import { ProductContext } from '../contexts/contexts'



const HomeView = () => {
    const productContext = useContext(ProductContext)



    return (
      <>
        <MainMenuSection />
        <ShowcaseSection />
        <ProductGridSection title="Featured Products" items={productContext.featuredProducts}/>
        <BannerSection />
        <ProductDisplaySection1 title="2 FOR USD $29" items={productContext.productDisplay1}/>
        <ProductDisplaySection2 title="2 FOR USD $29" items={productContext.productDisplay2}/>
        <ShopInfoSection />
        <FooterSection />
      </>
      
    )
}


export default HomeView