import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import NewProducts from './components/NewProducts';
import Deals from './components/Deals';
import Gaming from './components/Gaming';



function App() {
  return (
    <div>
      <Navbar />
      <Categories />
      <NewProducts />
      <Deals />
      <Gaming />
    </div>
  )
}

export default App


        
