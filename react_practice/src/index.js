import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App'; vivian commented this out
import reportWebVitals from "./reportWebVitals";

import VivTitle from "./AboutMe/VivTitle";
import VivIntro from "./AboutMe/VivIntro";
import VivFavColours from "./AboutMe/VivFavColours";
import VivFavSong from "./AboutMe/VivFavSong";
import VivVacations from "./AboutMe/VivVacations";
import VivGoals from "./AboutMe/VivGoals";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> vivian commented this bit out */}
    <div>
      <VivTitle />
      <VivIntro />
      <VivFavColours />
      <VivFavSong />
      <VivVacations />
      <VivGoals />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
