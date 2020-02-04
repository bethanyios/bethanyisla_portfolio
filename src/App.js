import React from "react";
// import plantbg from './Components/plantbg.jpg';
import { FlipCardStack } from "./Components/Bubbles/FlipCardStack.js";
import { FlipCardProfiles } from "./Components/Bubbles/FlipCardProfiles.js";
import "./App.css";

function App() {
  return (
    <div>
      <header className="font">Bethany Isla</header>
      <FlipCardStack />
      <FlipCardProfiles/>
    </div>
  );
}

export default App;
