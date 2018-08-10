import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header.js'
import HomeWrapper from './components/HomeWrapper.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Alerts from './components/Alerts.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeWrapper} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/alerts" component={Alerts} />
        </Switch>
      </div>
    );
  }
}

export default App;
