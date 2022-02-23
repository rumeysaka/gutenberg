import "./App.css"
import Menu from "./components/Menu/Menu.js";
import SideMenu from "./components/SideMenu/SideMenu.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards/Cards.js";
import React, { useState, useEffect, useContext } from "react";
import About from "./About.js";
import Sign from "./components/Login/Sign.js";
import "bootstrap/dist/css/bootstrap.min.css";
import fire from "./components/Login/fire.js";
import Details from "./components/Books/Details.js"
import Home from "./Home.js";
import { LoginContext } from "./LoginContext";
// import { BooksContext } from "./BooksContext";

import {
  BrowserRouter as Switch,
  Router,
  Route,
  BrowserRouter,
  Routes,
  useNavigate,
} from "react-router-dom";
import FavBooks from "./components/Books/FavBooks";
import { BooksContext } from "./BooksContext";

function App() {
  const [user, setUser] = useState(false)
  const [books, setBooks] = useState([])
  const [favList, setFavList] = useState([])

  
  const handleFav = (id) => {
    const updatedFav = books.filter((book) => book.id === id)
    setFavList([...favList].concat(updatedFav))
    console.log(favList)
  }
  
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
        <BooksContext.Provider value={{books, setBooks, favList, setFavList}}>
      <LoginContext.Provider value={{user, setUser}}>
          <Menu handleLogout={handleLogout} />
          <SideMenu />
        <Routes>
          <Route exact path="/" element={<Home onHandleFav={handleFav} />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign" element={<Sign />} />
          <Route exact path="/profile/:id" element={<Details />} />
          <Route exact path="/fav" element={<FavBooks  />} />
          </Routes>
          </LoginContext.Provider>
        </BooksContext.Provider>
      </BrowserRouter>
      {/* <div className="row">
        <div className="col-2">
          <SideMenu />
        </div>
        <div className="col-9 my-4 d-flex justify-content-center align-items-center">
          <div className="row">
            <Cards user={user} />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
