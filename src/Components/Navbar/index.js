import React from "react";
import "./style.css";

const Navbar = ({ setPage }) => {

  const handleClick = event => {
    event.preventDefault();
    setPage(event.target.id);
  };
  return (
    <>
    <section className="navbar">
      <li onClick={handleClick} id="home">
        Home
      </li>
      <li onClick={handleClick} id="about-me" >
        About me
      </li>
      <li onClick={handleClick} id="projects">
        Projects
      </li>
    </section>
    </>
  );
};
export default Navbar;
