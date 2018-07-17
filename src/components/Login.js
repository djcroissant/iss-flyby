import React, { Component } from 'react';

// Import CSS
import '../assets/css/App.css';
import '../assets/css/html5up.css';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="center-box">
                    <h3>Log in or <a href="#">sign up</a></h3>
                    <hr />
                    <h1>Log in with your email address and password</h1>
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
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>



        );
    };
};

export default Login;