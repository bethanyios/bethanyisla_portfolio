import React from "react";
import ReactCardFlip from "react-card-flip";
import { ReactComponent as StackFront } from '../../Assets/Cards/StackFront.svg'
import { ReactComponent as StackBack } from '../../Assets/Cards/StackBack.svg'
import { ReactComponent as ProfileFront } from '../../Assets/Cards/ProfileFront.svg'
import { ReactComponent as ProfileBack } from '../../Assets/Cards/ProfileBack.svg'
import { ReactComponent as ExperienceFront } from '../../Assets/Cards/ExperienceFront.svg'
import { ReactComponent as ExperienceBack } from '../../Assets/Cards/ExperienceBack.svg'
import { ReactComponent as InterestFront } from '../../Assets/Cards/InterestsFront.svg'
import { ReactComponent as InterestBack } from '../../Assets/Cards/InterestsBack.svg'

// STACK CARD
const FlipCardStack = props => {
  const [isFlipped, setFlipped] = React.useState(false);
  const handleClick = () => {
    setFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="verticle">
      <StackFront onClick={handleClick} />
      <StackBack onClick={handleClick} />
    </ReactCardFlip>
  );
};

// EXPERIENCE CARD
const FlipCardExperience = props => {
  const [isFlipped, setFlipped] = React.useState(false);
  const handleClick = () => {
   setFlipped( !isFlipped );
};
return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="verticle">
        <ExperienceFront onClick={handleClick}/>
        <ExperienceBack onClick={handleClick}/>
    </ReactCardFlip>
  );
};

// INTERESTS CARD
const FlipCardInterests = props => {
  const [isFlipped, setFlipped] = React.useState(false);
  const handleClick = () => {
   setFlipped( !isFlipped );
};
return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="verticle">
        <InterestFront onClick={handleClick}/>
        <InterestBack onClick={handleClick}/>
    </ReactCardFlip>
    );
  };

// PROFILES CARD
  const FlipCardProfiles = props => {
  const [isFlipped, setFlipped] = React.useState(false);
   const handleClick = () => {
     setFlipped( !isFlipped );
  };
  return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="verticle">
          <ProfileFront onClick={handleClick}/>
          <ProfileBack onClick={handleClick}/>
      </ReactCardFlip>
     );
   };

export { FlipCardStack, FlipCardExperience,  FlipCardInterests, FlipCardProfiles };
