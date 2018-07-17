import React, { Component } from 'react';

// Import CSS
import '../assets/css/App.css';
import '../assets/css/html5up.css';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="center-box">
                    <h3>Don't have an account yet?<a className="emphasis-link" href="#">Sign up</a></h3>
                    <hr />
                    <h1>Log in with your email address and password:</h1>
                    <form>
                        <label>
                            Email
                            <input
                                name="email"
                                type="email"
                            />
                        </label>
                        <label>
                            Password
                            <input
                                name="password"
                                type="password"
                            />
                        </label>
                        <input className="center" type="submit" value="Submit" />
                    </form>
                </div>
            </div>



        );
    };
};

export default Login;