import React from 'react';

import Map from './Map.js'

// Import CSS
import '../../../assets/css/map.css';

// Import images
import circle_one from '../../../assets/images/circle_one.png';

class LocationComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {location: this.props.location}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({location: event.target.value})
    this.props.onChangeLocation(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmitLocation(this.state.location)
  }

  render() {
    return (
      <div className="step-container">
        <div className="step-component">
            <img src={circle_one} className="circle_number" alt="1" />
        </div>
        <div className="step-component">
          <h3>Enter your location</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.location} onChange={ this.handleChange } />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="step-component">
          <Map />
        </div>
      </div>
    )
  }
}

export default LocationComponent