import React from 'react';

// Import images
import circle_one from '../../../assets/images/circle_one.png';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("why hello");
  }

  render() {
    return (
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
              <button className="button middle calculate" onClick={this.handleClick}>Search</button>
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
    );
  }
}

export default Location