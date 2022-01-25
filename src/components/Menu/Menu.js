import React from 'react';
import "./Menun.css"

export default function Menu() {
  return<>
  <div className="page">
  <nav className="page__menu page__custom-settings menu">
    <ul className="menu__list r-list">
      <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Option #1</a></li>
      <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Option #2</a></li>
      <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Option #3</a></li>
    </ul>
  </nav>
</div>
</>
}
