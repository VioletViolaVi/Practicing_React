import React from "react";

import VivTitle from "../AboutMe/VivTitle";
import VivIntro from "../AboutMe/VivIntro";
import VivFavColours from "../AboutMe/VivFavColours";
import VivFavSong from "../AboutMe/VivFavSong";
import VivVacations from "../AboutMe/VivVacations";
import VivGoals from "../AboutMe/VivGoals";
import VivToDoList from "../AboutMe/VivToDoList";

function MiddleSection() {
  return (
    <div>
      <section>
        Down below is all the middle section
        <VivTitle />
        <VivIntro />
        <VivFavColours />
        <VivFavSong />
        <VivVacations />
        <VivGoals />
        <VivToDoList />
      </section>
    </div>
  );
}

export default MiddleSection;
