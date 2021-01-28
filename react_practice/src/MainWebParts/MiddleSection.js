import React from "react";

import VivTitle from "../AboutMe/VivTitle";
import VivIntro from "../AboutMe/VivIntro";
import VivFavColours from "../AboutMe/VivFavColours";
import VivFavSong from "../AboutMe/VivFavSong";
import VivVacations from "../AboutMe/VivVacations";
import VivGoals from "../AboutMe/VivGoals";

function MiddleSection() {
  return (
    <div>
      <section>Down below is all the middle section</section>
      <VivTitle />
      <VivIntro />
      <VivFavColours />
      <VivFavSong />
      <VivVacations />
      <VivGoals />
    </div>
  );
}

export default MiddleSection;
