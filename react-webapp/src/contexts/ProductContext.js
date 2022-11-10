import { createContext, useContext, useState } from "react";

const ProductContex = createContext()

export const useProductContext = () => {
    return useContext(ProductContex)
}

export const ProductProvider = ({children}) => {
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState ([])
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [productDisplay1, setProductDisplay1] = useState([])
    const [productDisplay2, setProductDisplay2] = useState([])

    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take=8) => {
        const res = await fetch(url + `?take=${take}`)
        setFeaturedProducts(await res.json())
    }

    const getProductDisplay1 = async (take=4) => {
        const res = await fetch(url + `?take=${take}`)
        setProductDisplay1(await res.json())
    }

    const getProductDisplay2 = async (take=4) => {
        const res = await fetch(url + `/?take=${take}`)
        setProductDisplay2(await res.json())
    }

    const getProduct = async (articleNumber) => {
        const res = await fetch(url + `/${articleNumber}`)
        setProduct(await res.json())
    }

    return <ProductContex.Provider value={{product, products, featuredProducts, productDisplay1, productDisplay2, getProducts, getFeaturedProducts, getProductDisplay1, getProductDisplay2, getProduct}}>
        {children}
    </ProductContex.Provider>
}