import './App.css';
import React from 'react';
import NavBar from './redux/components/navBar/NavBar'
import Home from './redux/components/home/Home'
import {Route, Routes, Navigate} from "react-router-dom";
import NotFoundPages from './redux/components/NotFoundPages'
import Market from './redux/components/market/Market'
//import { useDispatch, useSelector} from 'react-redux';

function App() {
  /* const dispatch = useDispatch()
  const state = useSelector() */
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/market' element={<Market/>}/>
        <Route path="/*" element={<NotFoundPages/>}/>
      </Routes>
    </div>
  );
}

export default App;
