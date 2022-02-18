import Menu from "./components/Menu/Menu.js";
import SideMenu from "./components/SideMenu/SideMenu.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards/Cards.js";
import React, { useState, useEffect } from "react";
import About from "./About.js";
import Sign from "./components/Login/Sign.js";
import "bootstrap/dist/css/bootstrap.min.css";
import fire from "./components/Login/fire.js";
import {
  BrowserRouter as Switch,
  Router,
  Route,
  BrowserRouter,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  
  const [user, setUser] = useState("");
  // const navigate= useNavigate()

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  const handleLogout = () => {
    fire.auth().signOut();
    // navigate("/")
  };
  

  useEffect(() => {
    authListener();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Menu handleLogout={handleLogout} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
      <div className="row">
        <div className="col-2">
          <SideMenu />
        </div>
        <div className="col-9 my-4 d-flex justify-content-center align-items-center">
          <div className="row">
            <Cards user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
