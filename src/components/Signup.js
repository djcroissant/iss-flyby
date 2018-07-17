import React, { Component } from 'react';

// Import CSS
import '../assets/css/App.css';
import '../assets/css/html5up.css';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="center-box">
                    <h3>Already have an account? Please<a className="emphasis-link" href="#">log in</a></h3>
                    <hr />
                    <h1>Create an account:</h1>
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
                        <label>
                            Show password
                            <input
                                name="show_password"
                                type="check"
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