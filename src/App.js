import './App.css';
import React from 'react';
import NavBar from './components/navBar/NavBar'
import Home from './components/home/Home'
import { Route, Routes, Navigate } from "react-router-dom";
import NotFoundPages from './components/NotFoundPages'
import Market from './components/market/Market'
import BelowNavbar from './components/belowNavbar/BelowNavbar';
import MyCarousel from './components/carousel/Carousel';
import BelowNavbarWithIcons from './components/belowNavbar/BelowNavbarWithIcons';
import Cards from './components/cards/Cards';
//import { useDispatch, useSelector} from 'react-redux';

function App() {
  /* const dispatch = useDispatch()
  const state = useSelector() */
  return (
    <div className="App">
      <NavBar />
      <BelowNavbar />
      <MyCarousel />
      <BelowNavbarWithIcons />
      <Cards />
      <Routes>
        <Route path='/market' element={<Market />} />
      </Routes>
    </div>
  );
}

export default App;
