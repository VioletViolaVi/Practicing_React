import React from "react";

function VivGoals() {
  return (
    <div className="viv-section">
      <h2>Vivian's Goals</h2>
      <p>
        Vivian's goals include becoming a{" "}
        <span
          style={{
            backgroundColor: "purple",
            width: "7em",
            fontFamily: "Times New Roman serif",
          }}
        >
          Full Stack Web Developer
        </span>{" "}
        who is highly knowledgeable in a range of both{" "}
        <span className="front-and-back-end">Front End</span> and{" "}
        <span className="front-and-back-end">Back End</span> technologies. She
        hopes to be able to create a range of ecommerce and gaming websites that
        the entire global internet community will be able to enjoy and
        participate in.
      </p>
    </div>
  );
}

export default VivGoals;
