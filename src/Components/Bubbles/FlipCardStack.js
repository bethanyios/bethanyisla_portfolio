import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { StackFront, StackBack } from './FlipComponents';

const FlipCardStack = props => {
  const [isFlipped, setFlipped] = React.useState(false);


 const handleClick = () => {
   setFlipped( !isFlipped );
};
console.log(isFlipped);


    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="verticle">
          <StackFront onClick={handleClick}/>
          <StackBack onClick={handleClick}/>
      </ReactCardFlip>
    )
  }

export { FlipCardStack };
