import React, { useEffect, useState } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeView from './views/HomeView'
import CategoriesView from './views/CategoriesView'
import ProductsView from './views/ProductsView'
import ProductDetailsView from './views/ProductDetailsView'
import ContactView from './views/ContactView'
import SearchView from './views/SearchView'
import CompareView from './views/CompareView'
import WishlistView from './views/WishlistView'
import ShoppingCartView from './views/ShoppingCartView'
import NotFoundView from './views/NotFoundView';
import { ProductContext } from './contexts/contexts'





function App() {
  const [products, setProducts] = useState({
    allProducts: [],
    featuredProducts: [],
    productDisplay1: [],
    productDisplay2: []
  })


  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, allProducts: await result.json()})
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts()

    const fetchProductDisplay1 = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, productDisplay1: await result.json()})
    }
    fetchProductDisplay1()

    const fetchProductDisplay2 = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, productDisplay2: await result.json()})
    }
    fetchProductDisplay2()

  }, [products, setProducts])


  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <Routes>
          <Route path='/' element={<HomeView />}/>
          <Route path='/categories' element={<CategoriesView />}/>
          <Route path='/products' element={<ProductsView />}/>
          <Route path='/products/:name' element={<ProductDetailsView />}/>
          <Route path='/contact' element={<ContactView />}/>
          <Route path='/search' element={<SearchView />}/>
          <Route path='/compare' element={<CompareView />}/>
          <Route path='/wishlist' element={<WishlistView />}/>
          <Route path='/shoppingcart' element={<ShoppingCartView />}/>
          <Route path='*' element={<NotFoundView />}/>
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App
