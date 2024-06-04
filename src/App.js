import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Aside from './components/Aside'
import MelonPage from './pages/MelonPage'
import BugsPage from './pages/BugsPage'
import ApplePage from './pages/ApplePage'
import BillPage from './pages/BillPage'
import Recent from './pages/Recent'
import Favorites from './pages/Favorites'
import Mymusic from './pages/Mymusic'
import Home from './pages/Home'
import GeniePage from './pages/GeniePage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/melon' element={<MelonPage />} />
          <Route path='/bugs' element={<BugsPage />} />
          <Route path='/apple' element={<ApplePage />} />
          <Route path='/genie' element={<GeniePage />} />
          <Route path='/bill' element={<BillPage />} />
          <Route path='/recent' element={<Recent />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/mymusic' element={<Mymusic />} />
        </Routes>
      </Main>
      <Aside />
    </BrowserRouter>
  )
}

export default App