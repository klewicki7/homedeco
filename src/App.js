import './App.css';
import React from 'react';
import NavBar from './components/navBar/NavBar'
import { Route, Routes} from "react-router-dom";
import Market from './components/market/Market'
import Sillones from './pages/Sillones'
import Home from './pages/Home';
import BelowNavbar from './components/belowNavbar/BelowNavbar';

//import { useDispatch, useSelector} from 'react-redux';

function App() {
  /* const dispatch = useDispatch()
  const state = useSelector() */
  return (
    <div className="App">
      <NavBar />
      <BelowNavbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/sillones' element={<Sillones/>}/>
        <Route path='/market' element={<Market />} />
      </Routes>
    </div>
  );
}

export default App;
