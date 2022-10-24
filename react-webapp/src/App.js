import "./style.min.css";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactView from './views/ContactView';
import NotFoundView from './views/NotFoundView';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />}/>
        <Route path='/contact' element={<ContactView />}/>
        <Route path='*' element={<NotFoundView />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
