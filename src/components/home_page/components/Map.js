import React from 'react';
import GoogleMapReact from 'google-map-react'

// Import CSS
import '../../../assets/css/map.css';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class Map extends React.Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDuBk79WTkUsUz_2cuy-O7nP_6LI2WtYWo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map