import Menu from "./components/Menu/Menu.js"
import SideMenu from "./components/SideMenu/SideMenu.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/Cards/Cards.js";
import { BrowserRouter as Switch, Router, Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./About.js";
import React, { useState, useEffect } from 'react';
import Sign from "./components/Login/Sign.js";

function App() {
  return (
    <div>
      
      <div className="row">
      <div className="col-2"><SideMenu /></div>
      <div className="col-9 my-4">
        <div className="row"><Cards /></div></div></div>
        
    </div>
  );
}

export default App;
