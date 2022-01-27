import React from 'react';
import "./Menun.css"

export default function Menu() {
  return<>
  <div className="page">
  <nav className="page__menu page__custom-settings menu">
    <ul className="menu__list r-list row">
      <li className="menu__group col-2"><a href="#0" className="menu__link r-link text-underlined">Gutenberg</a></li>
      <li className="menu__group col-8 saga"><a href="#0" className="menu__link r-link text-underlined">Login</a></li>
      <li className="menu__group col-2"><a href="#0" className="menu__link r-link text-underlined">Sign Up</a></li>
    </ul>
  </nav>
</div>
</>
}
