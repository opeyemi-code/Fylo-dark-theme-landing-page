import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src="/images/logo.svg" alt="Logo" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#features" className="nav__link">
              Features
            </a>
          </li>
          <li className="nav__item">
            <a href="#team" className="nav__link">
              Team
            </a>
          </li>
          <li className="nav__item">
            <a href="#sign-in" className="nav__link">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
