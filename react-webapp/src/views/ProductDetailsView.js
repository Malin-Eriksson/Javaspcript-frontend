import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const ProductDetailsView = () => {
    const {id} = useParams()
    const [product, setProduct] = useState ({})
      
useEffect(() => {
  
  const fetchData = async () => {
    const result = await fetch ('api-url ${id}')
    setProduct(await result.json)
  }
  fetchData ()

}, [])

  return (
    <>
        <MainMenuSection />
        <div className='container mt-5'>
            <div>{product.name}
            <img src={product.image.Name}/>
            </div>
        </div>
        <FooterSection />
    </>
  )
}

export default ProductDetailsView