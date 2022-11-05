import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const ProductDetailsView = () => {
    const {id} = useParams()
    const [product, setProduct] = useState ({})
      
useEffect(() => {
  
  const fetchData = async () => {
    const result = await fetch ('https://win22-webapi.azurewebsites.net/api/products/${id}')
    setProduct(await result.json)
  }
  fetchData ()

}, [])

  return (
    <>
        <MainMenuSection />
        <div className='container mt-5'>
            <div>{product.name}
            <img src={product.imageName}/>
            </div>
        </div>
        <FooterSection />
    </>
  )
}

export default ProductDetailsView