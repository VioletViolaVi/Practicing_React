import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App'; vivian commented this out
import reportWebVitals from "./reportWebVitals";

import Navbar from "./MainWebParts/Navbar";
import MiddleContent from "./MainWebParts/MiddleContent";
import Footer from "./MainWebParts/Footer";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> vivian commented this bit out */}
    <div>
      <Navbar />
      <MiddleContent />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
