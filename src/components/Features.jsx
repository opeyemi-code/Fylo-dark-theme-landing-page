import React from "react";

export default function Features({ image, title, description }) {
  return (
    <div className="features__item">
      <img className="features__image" src={image} alt="File" />
      <h2 className="features__title">{title}</h2>
      <p className="features__description">{description}</p>
    </div>
  );
}
