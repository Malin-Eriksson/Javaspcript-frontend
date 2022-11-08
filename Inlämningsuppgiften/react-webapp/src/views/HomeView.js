import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import BannerSection from '../sections/BannerSection'
import ProductDisplaySection1 from '../sections/ProductDisplaySection1'
import ProductDisplaySection2 from '../sections/ProductDisplaySection2'
import ShopInfoSection from '../sections/ShopInfoSection'
import { FeaturedContext, Display1Context, Display2Context } from '../contexts/contexts'



const HomeView = () => {
    const featured = useContext(FeaturedContext)
    const display1 = useContext(Display1Context)
    const display2 = useContext(Display2Context)




    return (
      <>
        <section className='gradient-grey'><MainMenuSection /></section>
        <ShowcaseSection />
        <ProductGridSection title="Featured Products" items={featured}/>
        <BannerSection />
        <ProductDisplaySection1 title="2 FOR USD $29" items={display1}/>
        <ProductDisplaySection2 title="2 FOR USD $49" items={display2}/>     
        <ShopInfoSection />
        <FooterSection />
      </>
      
    )
}


export default HomeView