import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
