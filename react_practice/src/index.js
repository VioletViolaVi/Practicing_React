import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App'; vivian commented this out
import reportWebVitals from "./reportWebVitals";

import VivGoals from "./AboutMe/VivGoals";

// vivian's functions
function WebTitle() {
  return (
    <div>
      <h1
        style={{
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        Vivian
      </h1>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h2>Who is Vivian?</h2>
      <p>
        Vivian is a Leeds Beckett University Graduate with a{" "}
        <span style={{ textDecoration: "underline" }}>Diploma</span> in Software
        Development attained from Code Institute. She is 26 years old and has
        developed a strong passion for pursuing a career in Web Development.
      </p>
    </div>
  );
}

function FavColours() {
  return (
    <div>
      <h2>Vivian's favourite colours are the following:</h2>
      <ul>
        <li style={{ color: "red" }}>Red</li>
        <li style={{ color: "green" }}>Green</li>
        <li style={{ color: "yellow" }}>Yellow</li>
        <li style={{ color: "pink" }}>Pink</li>
        <li style={{ color: "blue" }}>Blue</li>
        <li style={{ color: "orange" }}>Orange</li>
        <li style={{ color: "grey" }}>Grey</li>
      </ul>
    </div>
  );
}

function FaveSongLyrics() {
  return (
    <div>
      <h2>Vivian's favourite song lyrics goes like this:</h2>
      <p
        style={{
          fontStyle: "italic",
          color: "purple",
        }}
      >
        John Little, Little John. What a crying shame they named him wrong.
        'Cause he turned out mighty, big and strong! Great, big, Little John.
      </p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> vivian commented this bit out */}
    <div>
      <WebTitle />
      <Intro />
      <FavColours />
      <FaveSongLyrics />
      <VivGoals />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
