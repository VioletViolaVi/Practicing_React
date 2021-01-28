import React from "react";

import VivTitle from "../MiddleSection/VivTitle";
import VivIntro from "../MiddleSection/VivIntro";
import VivFavColours from "../MiddleSection/VivFavColours";
import VivFavSong from "../MiddleSection/VivFavSong";
import VivVacations from "../MiddleSection/VivVacations";
import VivGoals from "../MiddleSection/VivGoals";
import VivToDoList from "../MiddleSection/VivToDoList";

function MiddleSection() {
  return (
    <div>
      <section>
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
