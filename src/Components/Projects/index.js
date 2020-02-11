import React from 'react';
import { SignpostProject, SafespaceProject } from "./Projects.js";

import './style.css';

const Projects = () => {
  return (
    <>
      <section className="project-display">
        <SignpostProject className="projects" />
        <SafespaceProject  className="projects" />
      </section>
      </>
    )
}

export default Projects;
