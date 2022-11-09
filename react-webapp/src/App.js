import React from 'react'
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
import { ProductProvider } from './contexts/ProductContext'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'




function App() {

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductProvider>
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
      </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
  }

export default App
