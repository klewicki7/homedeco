
import React from 'react';
import MyNavBar from './components/MyNavBar';
import {
  Routes,
  BrowserRouter,
  Route,
} from "react-router-dom";
import { HomeScreen } from './containers/Home'
import { MarketScreen } from './containers/Market'
import store from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';

import { Provider } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
       {/*  <Routes>
          <Route path="expenses" element={<HomeScreen />} />
          <Route path="invoices" element={<MarketScreen />} />
        </Routes> */}
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
