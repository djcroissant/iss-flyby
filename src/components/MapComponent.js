import React from 'react';
import GoogleMapReact from 'google-map-react'

// Import CSS
import '../assets/css/map.css';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class Map extends React.Component {
  static defaultProps = {
    defaultCenter: {lat: 47.6062, lng: -122.3321},
    defaultZoom: 0
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDuBk79WTkUsUz_2cuy-O7nP_6LI2WtYWo" }}
          defaultCenter={this.props.defaultCenter}
          defaultZoom={this.props.defaultZoom}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={"I'm a Map!"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map