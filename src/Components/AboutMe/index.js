import React from 'react';
import profile from '../../Assets/profile.JPG'

import './style.css';

const AboutMe = () => {
  return (
    <>
    <h1> About Me </h1>
<section className="about-content">
<img src={profile} alt="Bethany Scott"/>
<p>
I am a Frontend Engineer with a passion for creating beautiful designs, accessible programming and social impact work.
My road to programming began far from the tech world. The different steps I took along the way took me to a point that allowed me to shape my career combining everything I had learnt along the way.
</p>
<p>
From a degree in Latin American studies to learning how to program at an intensive bootcamp, I definitely took a leap and challenged myself in changing the trajectory to give me a vast range of skills.
For a year I lived in Colombia working with youth organisations: one that educated children on environmental sustainability to empower their community, and another that trained young people in orchestral music to guide them away from violence and poverty.
</p>

<p>
Now that I have learnt about the exciting influence programming can have and the vastness of what it we are capable of creating, I can’t wait to be part of making an impact on all levels.
Combining the inventiveness of programming and the creativeness of a team, I am fascinated by the possibilities of what can be produced.
</p>
<p>
I find myself deeply engrossed in code, filling any free time I have to jump back into my personal projects - I love to learn and be challenged.
With this knowledge in programming I have the flexibility, not only to create powerful products, but to work with a medium I am so compelled by.
</p>
</section>

</>
    )
}

export default AboutMe;

// More images and less text
// Iconise the structure to symbolise details about me rather than prose
// Punchy
