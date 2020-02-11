import React from "react";
import { FlipCardStack, FlipCardExperience,  FlipCardInterests, FlipCardProfiles } from "./FlipCards.js";
// import Navbar from "../Navbar/index.js";
import "./style.css";

const FlipCards = () => {
// const [colour, setColour] = React.useState(null);
//
// const changeColour = event => {
//   setColour()
// }

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


  //
  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>
  //       Click me
  //     </button>
  //     const changeColour = (event) => {
  //
  //
  //     useEffect(() => {
  //         document.colour = <Navbar />
  //       });
  //
  //     document.getElementById(<FlipCardProfiles />).onclick = function(){
  //     	document.getElementById(<Navbar />).style.color = '#ED8798';
  //     }
  //     document.getElementById(<FlipCardExperience />).onclick = function(){
  //     document.getElementById(<Navbar />).style.color = '#FF9A3C';
  //     }
  //     document.getElementById(<FlipCardInterests />).onclick = function(){
  //     document.getElementById(<Navbar />).style.color = '#52D9B9';
  //     }
  //   }
