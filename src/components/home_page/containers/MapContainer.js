import { connect } from 'react-redux'
import MapComponent from '../components/MapComponent.js'

const mapStateToProps = (state) => {
  return {
    center: {
      lat: state.issApi.location.coordinates.latitude,
      lng: state.issApi.location.coordinates.longitude
    },
    zoom: state.issApi.map.zoom
  }
}

const MapContainer = connect(
  mapStateToProps
)(MapComponent)

export default MapContainer