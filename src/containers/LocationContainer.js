import { connect } from 'react-redux'
import { updateLocation, fetchCoordinates } from '../redux/actions/actions.js'
import LocationComponent from '../components/LocationComponent.js'

const mapStateToProps = (state) => {
    return {
        location: state.issApi.location.userInput
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLocation: (location) => {
      dispatch(updateLocation(location))
    },
    onSubmitLocation: (location) => {
      dispatch(fetchCoordinates(location))
    }
  }
}

const LocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationComponent)

export default LocationContainer