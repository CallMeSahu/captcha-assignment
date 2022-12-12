import "./styles.css";
import "./Captcha.css";
import { useState } from "react";

function Captcha({ captchaChecked, setCaptchaChecked }) {
  function captchaClickHandler() {
    setCaptchaChecked(true);
  }

  return (
    <>
      {captchaChecked ? (
        <div className="captcha-container" onClick={captchaClickHandler}>
          <div className="wrapper">
            {" "}
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              {" "}
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />{" "}
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          <label className="checkbox-label">Verified!</label>
          <label className="brand-name">sidCaptcha</label>
        </div>
      ) : (
        <div className="captcha-container" onClick={captchaClickHandler}>
          <div className="checkbox-square"></div>
          <label className="checkbox-label">I'm not a robot</label>
          <label className="brand-name">sidCaptcha</label>
        </div>
      )}
    </>
  );
}

export default function App() {
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function formSubmitHandler() {
    name && email && captchaChecked
      ? alert("Form Submitted 👍")
      : alert("Incomplete submission ☹️");
  }

  return (
    <div className="App">
      <div>
        <h1>Contact Us</h1>
        <form className="contact-form" action="">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            placeholder="Your Name..."
            onChange={(event) => setName(event.target.value)}
          />
          <label
            className="warning-label"
            style={name ? { visibility: "hidden" } : { visibility: "initial" }}
          >
            Please enter your name
          </label>
          <label className="form-label">E-Mail</label>
          <input
            className="form-input"
            type="email"
            id="email"
            placeholder="Your E-mail..."
            onChange={(event) => setEmail(event.target.value)}
          />
          <label
            className="warning-label"
            style={email ? { visibility: "hidden" } : { visibility: "initial" }}
          >
            Please enter your email
          </label>
          <Captcha
            captchaChecked={captchaChecked}
            setCaptchaChecked={setCaptchaChecked}
          />
          <label
            className="warning-label captcha"
            style={
              captchaChecked
                ? { visibility: "hidden" }
                : { visibility: "initial" }
            }
          >
            Please check captcha
          </label>
        </form>
        <button className="submit-btn" onClick={formSubmitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}
