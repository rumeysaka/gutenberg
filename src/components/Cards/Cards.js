import React from "react";
import Books from "../Books/Books";

export default function Cards(props) {
  const { user, onHandleFav } = props;
  return (
    <div className="d-flex row justify-content-center ">
      <Books user={user} onHandleFav={onHandleFav}/>
    
  </div>)
}
