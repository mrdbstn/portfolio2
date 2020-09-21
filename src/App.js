import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route path="/">
          <Hero />
        </Route>
      </Switch>
    </Router>
  );
}

      {/* Navbar */}
      {/* Hero */}
      {/* Projects */}
      {/* Contact */}

export default App;
