import React from "react";

function VivFood() {
  let favFood1 = "Chips";
  let favFood2 = "Fish";
  let favFood3 = "Eggs";

  let nonFavFood1 = "Cabbage";
  let nonFavFood2 = "Cake";
  let nonFavFood3 = "Meat";

  const meatStyle = {
    fontSize: "5em",
  };
  meatStyle.color = "red";

  let cabbageStyle = {
    color: "green",
    fontWeight: "bold",
  };
  cabbageStyle.fontSize = "9em";

  let cakeStyle = {
    color: "brown",
    fontWeight: "bolder",
    textDecoration: "underline",
    fontSize: "7em",
  };
  cakeStyle.fontFamily = "Arial";

  return (
    <div className="viv-section">
      <h2>Vivian's favourite foods are:</h2>
      <p>{favFood1 + ", " + favFood2 + ", " + " and " + favFood3 + "."}</p>
      <h3>Vivian's least favourite foods are:</h3>
      <p>
        <span style={cabbageStyle}>{`${nonFavFood1}`}</span>{" "}
        <span>{ `, ` }</span>
        <span style={cakeStyle}>{`${nonFavFood2}`}</span>
        {` and `}
        <span style={meatStyle}>{`${nonFavFood3}`}</span>
        {". But that wasn't what you were asking here so... never mind. :P"}{" "}
      </p>
    </div>
  );
}

export default VivFood;
