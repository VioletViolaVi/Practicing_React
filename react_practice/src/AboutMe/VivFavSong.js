import React from "react";

import VivSongDisclosure from "./VivSongDisclosure"

function VivFavSong() {
  return (
    <div>
      <h2>Vivian's favourite song goes like this:</h2>
      <p
        style={{
          fontStyle: "italic",
          color: "purple",
        }}
      >
        John Little, Little John. What a crying shame they named him wrong.
        'Cause he turned out mighty, big and strong! Great, big, Little John.
      </p>
      <VivSongDisclosure/>
    </div>
  );
}

export default VivFavSong;
