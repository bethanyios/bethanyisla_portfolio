import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { StackFront, StackBack } from './FlipComponents';

const FlipCard = props => {
  const [isFlipped, setFlipped] = React.useState(false);

 const handleClick = () => {
   setFlipped(prevState => ({ isFlipped : !prevState.isFlipped}));
};

    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <StackFront onClick={handleClick}/>
          <StackBack onClick={handleClick}/>
      </ReactCardFlip>
    )
  }

export { FlipCard };
