import React from "react";
import { FlipCardStack, FlipCardExperience,  FlipCardInterests, FlipCardProfiles } from "./FlipCards.js";
// import Navbar from "../Navbar/index.js";
import "./style.css";

const FlipCards = () => {

  return (
    <section className="cards">
    <FlipCardStack />
    <FlipCardProfiles/>
    <FlipCardExperience/>
    <FlipCardInterests/>
    </section>
  )
}

export { FlipCards };
