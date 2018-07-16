import React, { Component } from 'react';

import Header from './components/Header.js'
import Home from './components/Home.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
