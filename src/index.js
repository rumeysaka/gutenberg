import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Menu from "./components/Menu/Menu.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Switch, Router, Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./About.js";
import Sign from "./components/Login/Sign.js";

ReactDOM.render(
  <React.StrictMode><BrowserRouter>
  <Menu />
  <Routes>
  <Route path="/about" element={<About />} />
  <Route path="/signin" element={<Sign />} />
  </Routes>  
  </BrowserRouter>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
