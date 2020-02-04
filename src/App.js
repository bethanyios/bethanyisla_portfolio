import React from "react";
// import plantbg from './Components/plantbg.jpg';
import { FlipCardStack } from "./Components/Bubbles/FlipCardStack.js";
import { FlipCardProfiles } from "./Components/Bubbles/FlipCardProfiles.js";
import { FlipCardExperience } from "./Components/Bubbles/FlipCardExperience.js";
import { FlipCardInterests } from "./Components/Bubbles/FlipCardInterests.js";
import "./App.css";

function App() {
  return (
    <div>
      <header className="font">Bethany Isla</header>
      <section className="cards">
      <FlipCardStack />
      <FlipCardProfiles/>
      <FlipCardExperience/>
      <FlipCardInterests/>
      </section>
    </div>
  );
}

export default App;
