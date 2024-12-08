import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar.component/index'

import HeroSection from './components/home.page/index'
import AboutUs from './components/aboutus.page/index'
import SynfuseTeam from './components/team.page/index'
import ContanctUs from './components/contactus.page/index'

import PageNotFound from './components/pagenotfound.page/index'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index path='/home' element={<HeroSection />}/>
            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/team' element={<SynfuseTeam />}/>
            <Route path='/contactus' element={<ContanctUs />}/>
          </Route>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App