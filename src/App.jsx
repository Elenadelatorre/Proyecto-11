import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Countries from './pages/Countries/Countries';
import Users from './pages/Users/Users';
import CountryById from './pages/CountryById/CountryById';
import UserById from './pages/UserById/UserById';
import NotFound from './pages/NotFound/NotFound';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/users' element={<Users />} />
        <Route path='/countries/:id' element={<CountryById />} />
        <Route path='/user/:id' element={<UserById />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
