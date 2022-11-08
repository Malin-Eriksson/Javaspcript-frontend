import React, { useEffect, useState } from 'react'
import "./style.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeView from './views/HomeView'
import CategoriesView from './views/CategoriesView'
import ProductsView from './views/ProductsView'
import ProductDetailsView from './views/ProductDetailsView'
import ContactView from './views/ContactView'
import SearchView from './views/SearchView'
import CompareView from './views/CompareView'
import WishlistView from './views/WishlistView'
import NotFoundView from './views/NotFoundView'
import { AllProductsContext, FeaturedContext, Display1Context, Display2Context } from './contexts/contexts'






function App() {
  const [allProducts, setAllProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [display1, setDisplay1] = useState ([])
  const [display2, setDisplay2] = useState ([])

 
  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setAllProducts(await result.json())
    }
    fetchAllProducts()

    const fetchFeatured = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeatured()

    const fetchDisplay1 = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setDisplay1(await result.json())
    }
    fetchDisplay1()

    const fetchDisplay2 = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setDisplay2(await result.json())
    }
    fetchDisplay2()

  }, [setAllProducts, setFeatured, setDisplay1, setDisplay2])


  return (
    <BrowserRouter>
      <AllProductsContext.Provider value={allProducts}>
      <FeaturedContext.Provider value={featured}>
      <Display1Context.Provider value={display1}>
      <Display2Context.Provider value={display2}>
        <Routes>
          <Route path='/' element={<HomeView />}/>
          <Route path='/categories' element={<CategoriesView />}/>
          <Route path='/products' element={<ProductsView />}/>
          <Route path='/products/:id' element={<ProductDetailsView />}/>
          <Route path='/contact' element={<ContactView />}/>
          <Route path='/search' element={<SearchView />}/>
          <Route path='/compare' element={<CompareView />}/>
          <Route path='/wishlist' element={<WishlistView />}/>
          <Route path='*' element={<NotFoundView />}/>
        </Routes>
      </Display2Context.Provider>
      </Display1Context.Provider>
      </FeaturedContext.Provider>
      </AllProductsContext.Provider>
    </BrowserRouter>
  );
  }

export default App
