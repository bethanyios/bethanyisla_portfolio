import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { InterestFront, InterestBack } from './FlipComponents';

const FlipCardInterests = props => {
  const [isFlipped, setFlipped] = React.useState(false);


 const handleClick = () => {
   setFlipped( !isFlipped );
};
console.log(isFlipped);


    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="verticle">
          <InterestFront onClick={handleClick}/>
          <InterestBack onClick={handleClick}/>
      </ReactCardFlip>
    )
  }

export { FlipCardInterests };
