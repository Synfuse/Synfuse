import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBarComponent from "./components/navbar.component/index";
import SynFuseHome from "./components/synfuse.page/index";
import AboutUs from "./components/aboutus.page/index";
import Products from "./components/products.page/index";
import SynFuseTeam from "./components/team.page/index";
import ContactUs from "./components/contactus.page/index";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<NavBarComponent />}>
            <Route index element={<SynFuseHome />}/>
            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/team' element={<SynFuseTeam />}/>
            <Route path='/contactus' element={<ContactUs />}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
