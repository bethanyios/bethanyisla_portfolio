import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from "./Components/HomePage/index.js";
import "./App.css";

function App() {
  return (
    <Router>
    <Route exact path="/" component={HomePage} />
    </Router>
  );
}

export default App;
