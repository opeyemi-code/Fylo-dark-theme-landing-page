import React from "react";
import { useState } from "react";

export default function Team() {
  const [arrowIcon, setArrowIcon] = useState("/public/images/icon-arrow.svg");

  return (
    <div className="team">
      <div className="team__image-wrapper">
        <img
          className="team__image"
          src="/public/images/illustration-stay-productive.png"
          alt=""
        />
      </div>
      <div className="team__content">
        <h2 className="team__title">Stay Productive, wherever you are</h2>
        <p className="team__description">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="tam__description">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          onMouseEnter={() =>
            setArrowIcon(
              "https://friedaxons.github.io/fylo-dark-theme-landing-page/images/icon-arrow-white.svg"
            )
          }
          onMouseLeave={() => setArrowIcon("/public/images/icon-arrow.svg")}
          className="team__link"
          href="http://"
        >
          See how fylo works
          <img className="cyan-arrow-icon" src={arrowIcon} alt="" />
          {/* <img
            className="white-arrow-icon"
            src="https://friedaxons.github.io/fylo-dark-theme-landing-page/images/icon-arrow-white.svg"
            alt=""
          /> */}
        </a>
      </div>
    </div>
  );
}
