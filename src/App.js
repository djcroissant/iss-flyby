import React, { Component } from 'react';

import Header from './components/Header.js'
import Home from './components/Home.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
