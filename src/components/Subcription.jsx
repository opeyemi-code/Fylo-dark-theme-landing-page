import React, { useState } from "react";

export default function Subcription() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (regEx.test(inputValue)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Get early access today</h2>
        <p className="form__description">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="form__controls">
          <div className="input-wrapper">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              className="form__input-field"
              type="email"
              value={inputValue}
              placeholder="email@example.com"
            />
            {!isValid && (
              <p className="error-msg">Please enter a valid email</p>
            )}
          </div>
          <button type="submit" className="form__btn btn btn__cta">
            Get Started For Free
          </button>
        </div>
      </form>
    </>
  );
}
