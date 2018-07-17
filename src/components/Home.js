import React, { Component } from 'react';
import Select from 'react-select';

// Import images
import circle_one from '../assets/images/circle_one.png';
import circle_two from '../assets/images/circle_two.png';
import circle_three from '../assets/images/circle_three.png';
import iss_pic from '../assets/images/iss.png';

// Import CSS
import '../assets/css/App.css';
import '../assets/css/html5up.css';
import '../assets/css/react-select.css';

class Home extends Component {
    hours = function range(size, startAt = 0, suffix) {
        let startAtValue;
        if (suffix === "p.m.") {
            startAtValue = startAt + 12;
        } else {
            startAtValue = startAt;
        }
        return [...Array(size).keys()].map(i => ({value: (i + startAtValue), label: ((i + startAt).toString() + ":00" + suffix)}));
    }

    time_range = function() {
        let options = [{value: 12, label: "Noon"}]
        options.push.apply(options, this.hours(11, 1, 'p.m.'));
        options.push({value: 0, label: "Midnight"});
        options.push.apply(options, this.hours(11, 1, 'a.m.'));
        return options;
    };

    render() {
        return (
            <div className="container">
                <div className="block-section">
                    <img className="center" src={iss_pic} />
                    <h1 className="app-title">When to spot the International Space Station</h1>
                </div>
                <div className="step-container">
                    <div className="step-component">
                        <img src={circle_one} className="circle_number" alt="1" />
                    </div>
                    <div className="step-component">
                        <h3>Enter your location</h3>
                        <label>
                            <input
                                type="text"
                            />
                        </label>
                    </div>
                    <div className="step-component">
                        <h3>MAP</h3>
                        <h3>MAP</h3>
                        <h3>MAP</h3>
                        <h3>MAP</h3>
                        <h3>MAP</h3>
                        <h3>MAP</h3>
                    </div>
                </div>
                <div className="step-container">
                    <div className="step-component">
                        <img src={circle_two} className="circle_number" alt="2" />
                    </div>
                    <div className="step-component">
                        <h3>Enter your timeframe</h3>
                        <div className="time-selections">
                            <div className="time-select">
                                <span>Earliest:</span>
                                <Select 
                                    name="time-select"
                                    options={this.time_range()} 
                                    placeholder="Select a start time" 
                                />
                            </div>
                            <div className="time-select">
                                <span>Latest:</span>
                                <Select 
                                    name="time-select"
                                    options={this.time_range()} 
                                    placeholder="Select a start time" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="step-container">
                    <div className="step-component">
                        <img src={circle_three} className="circle_number" alt="1" />
                    </div>
                    <div className="step-component">
                        <a href="#" className="button middle calculate">Calculate Passovers</a>
                    </div>
                </div>
                <div className="block-section">
                    <h2>Upcoming flyovers:</h2>
                    <FlybyTable />
                </div>
            </div>
        );
    };
};

class FlybyRows extends Component {
    s_to_min = function(seconds) {
      // takes number of seconds in string form
      // converts to minutes and rounds to nearest whole number
      // returns minutes in string form
      const s = parseInt(seconds);
      const m = Math.round(s / 60);
      return m.toString();
    }
  
    ms_convert = function(milliseconds, type) {
      const ms = parseInt(milliseconds);
      const date = new Date(ms * 1000);
      switch(type) {
        case 'date':
          return date.toLocaleDateString();
        case 'time':
          return date.toLocaleTimeString();
        default:
          return ''
      }
    }
  
    render() {
      const flybys = this.props.response;
      const flybyRows = flybys.map((flyby) =>
        <tr key={flyby.risetime.toString()}>
          <td>{this.ms_convert(flyby.risetime, 'date')}</td>
          <td>{this.ms_convert(flyby.risetime, 'time')}</td>
          <td>{this.s_to_min(flyby.duration)}</td>
        </tr>
      );
      return (
        <tbody>
          {flybyRows}
        </tbody>
      );
    }
  }
  
  class FlybyTable extends Component {
    render() {
    //   if (this.props.flybys !== '') {
        return (
          <table>
            <thead>
            <tr>
              <th>Date</th>
              <th>Rise Time</th>
              <th>Duration (minutes)</th>
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

export default Home;