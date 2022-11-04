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
import ShoppingCartView from './views/ShoppingCartView'
import NotFoundView from './views/NotFoundView'
import { ProductsContext, FeaturedContext, Display1Context, Display2Context } from './contexts/contexts'





function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [display1, setDisplay1] = useState ([])
  const [display2, setDisplay2] = useState ([])

 
  useEffect(() => {
    const fetchProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedProducts()

    const fetchDisplay1 = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setDisplay1(await result.json())
    }
    fetchDisplay1()

    const fetchDisplay2 = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setDisplay1(await result.json())
    }
    fetchDisplay2()

  }, [setProducts, setFeatured, setDisplay1, setDisplay2])


  return (
    <BrowserRouter>
      <ProductsContext.Provider value={products}>
      <FeaturedContext.Provider value={featured}>
      <Display1Context.Provider value={display1}>
      <Display2Context.Provider value={display2}>
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
      </Display2Context.Provider>
      </Display1Context.Provider>
      </FeaturedContext.Provider>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
  }

export default App
