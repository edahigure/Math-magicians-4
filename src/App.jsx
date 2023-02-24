import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Layout from './pages/Layout'
import Home from './pages/Home'
import Quote from './pages/Quote'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/Home' element={<Home />} />
          <Route path='/Calculator' element={<Calculator />} />
          <Route path='/Quote' element={<Quote />} />
        </Route>


      </Routes>
    </>

  );
}

export default App;