import React, { Component } from 'react';

import logo from '../assets/images/iss.png';
import '../assets/css/App.css';
import '../assets/css/html5up.css';

class Header extends Component {
    render() {
      return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#" className="button primary">Sign Up</a></li>
                </ul>
            </nav>
        </header>
      );
    }
  }

  export default Header;