import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Users from './pages/Users/Users';
import ProductById from './pages/ProductById/ProductById';
import PlayerById from './pages/UserById/UserById';
import NotFound from './pages/NotFound/NotFound';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products/:id' element={<ProductById />} />
        <Route path='/user/:id' element={<UserById />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
