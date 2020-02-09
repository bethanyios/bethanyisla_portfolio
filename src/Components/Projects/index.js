import React from 'react';
import { SignpostProject, SafespaceProject } from "./Projects.js";

import './style.css';

const Projects = () => {
  return (
    <>
      <section className="project-display">
        <SignpostProject />
        <SafespaceProject />
      </section>
      </>
    )
}

export default Projects;
