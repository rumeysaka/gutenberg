import React from 'react';
import "./Menun.css"

export default function Menu() {
  return<>
  <div className="page">
  <nav className="page__menu page__custom-settings menu">
    <ul className="menu__list r-list row">
      <li className="menu__group col-8"><a href="/" className="menu__link r-link text-underlined">Gutenberg</a></li>
      <div className='row col-4 saga'>
      <li className="menu__group col-4 saga"><a href="/about" className="menu__link r-link text-underlined">About</a></li>
      <li className="menu__group col-3 saga"><a href="/signin" className="menu__link r-link text-underlined">Login</a></li>
      <li className="menu__group col-3 saga"><a href="/signout" className="menu__link r-link text-underlined">SignUp</a></li></div>
    </ul>
  </nav>
</div>
</>
}
