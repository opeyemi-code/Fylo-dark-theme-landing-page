import React from "react";
import logo from "../../public/images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Features
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Team
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
