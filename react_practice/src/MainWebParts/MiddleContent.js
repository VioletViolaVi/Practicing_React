import React from "react";

import VivTitle from "../AboutMe/VivTitle";
import VivIntro from "../AboutMe/VivIntro";
import VivFavColours from "../AboutMe/VivFavColours";
import VivFavSong from "../AboutMe/VivFavSong";
import VivVacations from "../AboutMe/VivVacations";
import VivGoals from "../AboutMe/VivGoals";

function MiddleContent() {
  return (
    <div>
      <section>Down below are all the middle section</section>
      <VivTitle />
      <VivIntro />
      <VivFavColours />
      <VivFavSong />
      <VivVacations />
      <VivGoals />
    </div>
  );
}

export default MiddleContent;
