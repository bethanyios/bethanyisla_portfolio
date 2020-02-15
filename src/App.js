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
      <div>
        <Navbar setPage={setPage}></Navbar>
        <HomePage />
      </div>
    );
  } else if (page === "about-me") {
    return (
      <div>
        <Navbar setPage={setPage}></Navbar>
        <AboutMe />
      </div>
    );
  } else if (page === "projects") {
    return (
      <div>
        <Navbar setPage={setPage}></Navbar>
        <Projects />
      </div>
    );
}
}




export default App;
