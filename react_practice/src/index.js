import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App'; vivian commented this out
import reportWebVitals from "./reportWebVitals";

// vivian's functions
function FirstTry() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>
        This is a <span style={{ textDecoration: "underline" }}>paragraph</span>{" "}
      </p>
    </div>
  );
}

function ColourList() {
  return (
    <ul>
      <li style={{ color: "red" }}>red</li>
      <li style={{ color: "green" }}>green</li>
      <li style={{ color: "yellow" }}>yellow</li>
    </ul>
  );
}

function SongPara() {
  return (
    <p
      style={{
        fontStyle: "italic",
        color: "blue",
      }}
    >
      John Little, Little John. What a crying shame they named him wrong. 'Cause
      he turned out mighty, big and strong! Great, big, Little John.
    </p>
  );
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> vivian commented this bit out */}
    <div>
      <FirstTry />
      <ColourList />
      <SongPara />
      {/* <IntroMe /> */}
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
