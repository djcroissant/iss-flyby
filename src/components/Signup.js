import React, { Component } from 'react';

// Import images
import circle_one from '../assets/images/circle_one.png';
import circle_two from '../assets/images/circle_two.png';
import circle_three from '../assets/images/circle_three.png';
import iss_pic from '../assets/images/iss.png';

// Import CSS
import '../assets/css/App.css';
import '../assets/css/html5up.css';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="center-box">
                    <h3>Already have an account? Then please <a href="#">log in</a></h3>
                    <h1>Create and account</h1>
                    <hr />
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
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>



        );
    };
};

export default Login;