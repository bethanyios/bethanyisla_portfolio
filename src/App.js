import React from "react";
import Navbar from "./Components/Navbar/index.js";
import HomePage from "./Components/HomePage/index.js";
import AboutMe from "./Components/AboutMe/index.js";
import Projects from "./Components/Projects/index.js";

import "./App.css";

function App() {
    const [page, setPage] = React.useState("home");

  if (page === "home") {
    return (
      <>
        <Navbar setPage={setPage}></Navbar>
        <HomePage />
      </>
    );
  } else if (page === "about-me") {
    return (
      <>
        <Navbar setPage={setPage}></Navbar>
        <AboutMe />
      </>
    );
  } else if (page === "projects") {
    return (
      <>
        <Navbar setPage={setPage}></Navbar>
        <Projects />
    </>
    );
}
}




export default App;
