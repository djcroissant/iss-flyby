import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import logo from '../assets/images/iss.png';
// import '../assets/css/app.css';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => {
    return {
        flybys: state.api.flybys
    };
};

class Home extends Component {
    
    render() {
        return (
            <div className="container">
                <p>ISS API Form</p>
            </div>
        );
    }
}
   
export default connect(mapStateToProps)(Home);