import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Tab from './comp/tab';
import Home from './pages/Home'
import About from './pages/About';
import Features from './pages/Features';
import './App.css';


function App() {
  return (
   <Router>
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab> 
            <a>Home</a> 
          </Tab>
          <Tab>
             <a>About</a> 
          </Tab>
          <Tab> 
            <a>Features</a> 
          </Tab>      
        </div>

        <div className="viewport">
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
        </div>
      </div>
    </div>
    
   </Router>
  );
}

export default App;
