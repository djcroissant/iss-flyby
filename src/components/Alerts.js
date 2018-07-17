import React, { Component } from 'react';
import Select from 'react-select';

// Import images
import iss_pic from '../assets/images/iss.png';

// Import CSS
import '../assets/css/App.css';
import '../assets/css/html5up.css';

class Alerts extends Component {


    render() {
        return (
            <div className="container">
                <div className="block-section">
                    <img className="center" src={iss_pic} />
                    <h1 className="app-title">Your ISS Alerts</h1>
                </div>
                <div className="block-section">
                    <h2>Upcoming flyovers:</h2>
                    <AlertTable />
                </div>
            </div>
        );
    };
};

class AlertRows extends Component {  
    render() {
        const flybys = this.props.response;
        const alertRows = flybys.map((flyby) =>
                <tr key={flyby.risetime.toString()}>
                    <td>{this.ms_convert(flyby.risetime, 'date')}</td>
                    <td>{this.ms_convert(flyby.risetime, 'time')}</td>
                    <td>{this.s_to_min(flyby.duration)}</td>
                </tr>
                );
        return (
            <tbody>
                {alertRows}
            </tbody>
        );
    }
}
  
class AlertTable extends Component {
    render() {
    //   if (this.props.flybys !== '') {
        return (
            <table>
                    <thead>
                    <tr>
                        <th>Upcoming Passovers</th>
                        <th>Alert</th>
                        <th>Created</th>
                        <th>Location</th>
                        <th>Earliest</th>
                        <th>Latest</th>
                        <th>Manage</th>
                    </tr>
                    </thead>
                    {/* <FlybyRows response={this.props.response}/> */}
            </table>
        );
    //   } else {
    //     return null
    //   }
    }
}

export default Alerts;