import Menu from "./components/Menu/Menu.js"
import SideMenu from "./components/SideMenu/SideMenu.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/Cards/Cards.js";
import { BrowserRouter as Switch, Router, Route, BrowserRouter } from "react-router-dom";
import About from "./About.js";
import './App.css';
import React, { useState, useEffect } from 'react';
import fire from "./components/Login/fire"
import Login from './components/Login/Login';
import Hero from "./components/Login/Hero";

function App() {
  const  [user, setUser] = useState("");
  const  [email, setEmail] = useState("");
  const  [password, setPassword] = useState("");
  const  [emailError, setEmailError ] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccont, setHasAccount] = useState(false);

  const clearTheInputs = () =>{
    setEmail("");
    setPassword("");
  }

  const clearErrors = () =>{
    setEmailError("");
    setPassword("");
  }
  const handleLogin = () =>{
    clearErrors()
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch( err =>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth-user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    })
  }

  const handleSignUp = () =>{
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch( err =>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    })
  }

  const handleLogout = () =>{
    fire.auth().signOut();
  }

  const authListener = () =>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        setUser(user);
      } else{
        setUser("");
      }
    })
  }

  useEffect(()=>{
    authListener()
  },[])
  return (
    <div>
      <BrowserRouter>
      <Route path="/about" component={About} />
        <Menu />
        </BrowserRouter>
      <div className="row">
      <div className="col-2"><SideMenu /></div>
      <div className="col-9 my-4">
        <div className="row"><Cards /></div></div></div>
        <BrowserRouter>
      <Route path="/signin" component={Login}/>
      {user ? (
        <Hero handleLogout={handleLogout} />      
        ):(
                <Login email={email} setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin}
      handleSignUp={handleSignUp} 
      hasAccount={hasAccont} 
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError} />
      )}
      </BrowserRouter>
    </div>
  );
}

export default App;
