import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/about-me.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AboutMe className='About-Me'/>

      </div>
    );
  }
}

export default App;
