import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { ExperienceFront, ExperienceBack } from './FlipComponents';

const FlipCardExperience = props => {
  const [isFlipped, setFlipped] = React.useState(false);


 const handleClick = () => {
   setFlipped( !isFlipped );
};
console.log(isFlipped);


    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="verticle">
          <ExperienceFront onClick={handleClick}/>
          <ExperienceBack onClick={handleClick}/>
      </ReactCardFlip>
    )
  }

export { FlipCardExperience };