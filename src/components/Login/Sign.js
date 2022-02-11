import React, { useState, useEffect } from 'react';
import fire from "./fire"
import Login from './Login';
import Hero from "./Hero";
import "./App.css";

export default function Sign() {
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
  return <div>
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
</div>;
}
