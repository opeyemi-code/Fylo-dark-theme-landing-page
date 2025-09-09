import React from "react";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero__image-wrapper">
        <img
          className="hero__image"
          src="/public/images/illustration-intro.png"
          alt=""
        />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="hero__description">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="btn hero__btn" type="button">
          Get Started
        </button>
      </div>
    </div>
  );
}
