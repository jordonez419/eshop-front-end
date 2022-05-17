import './App.css';
import Button from '@mui/material/Button';
import React from 'react'
import { Route, Routes, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import AllItems from './components/All-Items';
import ItemDetail from './components/Item-Detail';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      {/* <Button variant="contained">Hello World</Button> */}
      <Routes>
        {/* <Route exact path='/' element={<Home setUserSquad={setUserSquad} setOponentSquad={setOponentSquad} />}>
        </Route> */}
        <Route exact path='/d' element={<Home />}>  </Route>
        <Route path='/item-details' element={<ItemDetail />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/home' element={<AllItems />}></Route>
      </Routes>
    </div>
  );
}

export default App;
