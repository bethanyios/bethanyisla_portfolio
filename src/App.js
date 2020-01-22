import React from 'react';
// import plantbg from './Components/plantbg.jpg';
// import Bubble from './Components/bubbles';
import './App.css';
import './bubbles.css';


function App() {
  return (
      <div>
      <header className="Font">
      </header>

      <section className="bubbles">
      <div className="circle-stack">
      <span className="circle-stack-text"> Stack </span>
      </div>
      <div className="circle-profiles">
      <span className="circle-profiles-text"> Profiles </span>
      </div>
      <div className="circle-experience">
      <span className="circle-experience-text"> Experience </span>
      </div>
      <div className="circle-interests">
      <span className="circle-interests-text"> Interests </span>
      </div>
      </section>

      </div>
  );
}

export default App;



  // <img src={plantbg} alt="background" />
