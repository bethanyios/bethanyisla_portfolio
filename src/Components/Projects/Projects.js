import React from "react";
import ReactCardFlip from "react-card-flip";

import { ReactComponent as SignpostFront } from '../../Assets/Projects/SignpostFront.svg'
import { ReactComponent as SignpostBack } from '../../Assets/Projects/SignpostBack.svg'
import { ReactComponent as SafespaceFront } from '../../Assets/Projects/SafespaceFront.svg'
import { ReactComponent as SafespaceBack } from '../../Assets/Projects/SafespaceBack.svg'


// Signpost
const SignpostProject = props => {
  const [isFlipped, setFlipped] = React.useState(false);
  const handleClick = () => {
    setFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="verticle">
      <SignpostFront onClick={handleClick}/>
      <SignpostBack onClick={handleClick} />
    </ReactCardFlip>
  );
};

// Safespace
const SafespaceProject = props => {
  const [isFlipped, setFlipped] = React.useState(false);
  const handleClick = () => {
   setFlipped( !isFlipped );
};
return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="verticle">
        <SafespaceFront onClick={handleClick}/>
        <SafespaceBack onClick={handleClick}/>
    </ReactCardFlip>
  );
};


 export { SignpostProject, SafespaceProject };
