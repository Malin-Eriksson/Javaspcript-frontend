import React, { useState } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import BannerSection from '../sections/BannerSection'
import ProductDisplaySection1 from '../sections/ProductDisplaySection1'
import ProductDisplaySection2 from '../sections/ProductDisplaySection2'
import ShopInfoSection from '../sections/ShopInfoSection'

function HomeView() {

  const [featuredProducts] = useState([
    { id: 1, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 7, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 8, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  ])

  const [productDisplay1] = useState([
    { id: 1, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Striped knit sweater", category: "Woman", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  ])

  const [productDisplay2] = useState([
    { id: 1, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Striped knit sweater", category: "Woman", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, name: "Striped knit sweater", category: "Women", price: "$35", rating: 5, img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  ])


  return (
    <>
      <MainMenuSection />
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" products={featuredProducts}/>
      <BannerSection />
      <ProductDisplaySection1 title="2 FOR USD $29" products={productDisplay1} />
      <ProductDisplaySection2 title="2 FOR USD $29" products={productDisplay2} />
      <ShopInfoSection />
      <FooterSection />
    </>
    
  )
}


export default HomeView