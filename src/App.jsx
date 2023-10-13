import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import MenuBar from './components/shared/MenuBar';
import SideBar from './components/shared/Sidebar'
import MenuMovil from './components/shared/menuMovil'
import CardsContainer from './components/cards/CardsContainer';
import Cart from './components/Cart';
import { MenuFetchData } from './components/shared/Fetch/MenuFetchData';

function App() {

  const [showSideBar, setShowSideBar] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return ( 
    <div className="bg-[#353536] w-full min-h-screen">
      <MenuFetchData>
        <BrowserRouter>
          <MenuBar toggleSideBar={toggleSideBar} />
          <SideBar showSideBar={showSideBar} />
            <Routes>
              <Route path="/Home" element="" />
              <Route path="/Us" element="" />
              <Route path="/Menu" element="" />
              <Route path="/Contact" element="" />
              <Route path="/category/:category" element={<CardsContainer  />} />
            </Routes>       
          <MenuMovil toggleSideBar={toggleSideBar} />
        </BrowserRouter>
      </MenuFetchData>
    </div>

  )
}

export default App
