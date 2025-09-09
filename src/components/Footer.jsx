import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Logo + Description */}
      <div className="footer__top">
        <div className="footer__logo-wrapper">
          <img
            className="footer__logo"
            src="/images/logo.svg"
            alt="Fylo Logo"
          />
        </div>
        <div className="footer__description-wrapper">
          <img
            className="footer__icon footer__icon--location"
            src="/images/icon-location.svg"
            alt="location"
          />
          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="footer__contact">
        <div className="footer__contact-item footer__contact-item--phone">
          <img
            className="footer__icon footer__icon--phone"
            src="/images/icon-phone.svg"
            alt="phone"
          />
          <a className="footer__link" href="tel:+15431234567">
            +1-543-123-4567
          </a>
        </div>
        <div className="footer__contact-item footer__contact-item--email">
          <img
            className="footer__icon footer__icon--email"
            src="/images/icon-email.svg"
            alt="Email"
          />
          <a className="footer__link" href="mailto:example@fylo.com">
            example@fylo.com
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">
              About Us
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Jobs
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Press
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Blog
            </a>
          </li>
        </ul>

        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">
              Contact Us
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Terms
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Privacy
            </a>
          </li>
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="footer__socials">
        <a
          href="#"
          className="footer__social-link footer__social-link--facebook"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} className="footer__social-icon" />
        </a>
        <a
          href="#"
          className="footer__social-link footer__social-link--twitter"
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} className="footer__social-icon" />
        </a>
        <a
          href="#"
          className="footer__social-link footer__social-link--instagram"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} className="footer__social-icon" />
        </a>
      </div>
    </footer>
  );
}
