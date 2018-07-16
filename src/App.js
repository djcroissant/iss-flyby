import React, { Component } from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
// import Profile from './components/Profile'
// import AlertList from './components/AlertList'
// import AlertEdit from './components/AlertEdit'
// import requireAuthentication from './utils/requireAuth'

class App extends Component {
    render() {
        const pathname = window.location.pathname
        return ( 
            <div>
              <Header />
              <Switch>
                  <Route exact path="/" component={Home} />

                  {/* <Route path="/profile/:id" component={requireAuthentication(Profile)} /> */}
                  {/* <Route path="/alerts" component={requireAuthentication(AlertList)} /> */}
                  {/* <Route path="/alerts/:alert_id/edit" component={requireAuthentication(AlertEdit)} /> */}
                  <Route path="**" component={Home} />
              </Switch>
            </div>
        );
    }
}

export default App;
