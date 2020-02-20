import React from 'react';
import profile from '../../Assets/profile.JPG'
import cv from '../../Assets/bytes-CV 2020.pdf'
import imagecv from '../../Assets/image-cv.png'

import './style.css';

const AboutMe = () => {
  return (
    <>

<section className="about-content">
<img className="profile" src={profile} alt="Bethany Scott"/>

<p>
I am a Frontend Engineer with a passion for creating beautiful designs, accessible programming and social impact work.
</p>
<p>
My road to programming began far from the tech world.
</p>
<p>
From a degree in Latin American studies to learning how to program at an intensive bootcamp, I have taken a leap and challenged myself to give me a range of skills.
</p>
<p>
For a year I lived in Colombia, working with youth organisations: one that educated children on environmental sustainability to empower their community, and another that trained young people in orchestral music to guide them away from violence and poverty.
</p>
<p>
Now that I have learnt about the influence of programming, and the vastness of what it we are capable of creating, I can’t wait to be part of making an impact on all levels.
Combining the inventiveness of programming and the creativeness of a team, I am fascinated by the possibilities of what can be produced.
</p>
<p>
I have found something that I gravitate towards even when I'm not working. I love the challenge in learning complex things, and getting immersed in problem solving.
</p>
<p>
With this knowledge in programming I have the autonomy, not only to create powerful and aesthetic products, but to work with a medium I am so compelled by.
</p>
<p>
Click my CV below to download it as a PDF:
</p>
<a href={cv} download><img className="cv" src={imagecv} alt="CV"/></a>


</section>

</>
    )
}

export default AboutMe;

// More images and less text
// Iconise the structure to symbolise details about me rather than prose
// Punchy
