import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { ProfileFront, ProfileBack } from './FlipComponents';

const FlipCardProfiles = props => {
  const [isFlipped, setFlipped] = React.useState(false);


 const handleClick = () => {
   setFlipped( !isFlipped );
};
console.log(isFlipped);


    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="verticle">
          <ProfileFront onClick={handleClick}/>
          <ProfileBack onClick={handleClick}/>
      </ReactCardFlip>
    )
  }

export { FlipCardProfiles };
