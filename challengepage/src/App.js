import React from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Online from './components/Online';
import Offline from './components/Offline';
import Dots from './components/Dots';

import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router basename="/">

        {/* Add Menu Component */}
        <Navbar />
        
        <Routes> 
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Online" component={Online}/>
          <Route path="/Offline" component={Offline}/>
          <Route path="/Dot" component={Dots}/>

          
        </Routes>
      </Router>

    </div>
  );
}

export default App;