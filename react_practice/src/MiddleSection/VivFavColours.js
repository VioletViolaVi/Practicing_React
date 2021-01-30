import React from "react";

function VivFavColours() {

  const redStyle = { 
    color: "red", 
  }; 

  return (
    <div className="viv-section">
      <h2>Vivian's favourite colours are the following:</h2>
      <ul className="fav-colour-list">
        <li style={ redStyle }>Red</li>
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

export default VivFavColours;
