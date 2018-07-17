import React, { Component } from 'react';

// Import CSS
import '../assets/css/App.css';
import '../assets/css/html5up.css';

class Header extends Component {
    render() {
      return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/alerts">Alerts</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup" className="button primary">Sign Up</a></li>
                </ul>
            </nav>
        </header>
      );
    }
  }

  export default Header;