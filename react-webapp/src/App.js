import "./style.min.css";
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from "./views/ProductDetailsView";
import ContactView from './views/ContactView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishlistView from './views/WishlistView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
