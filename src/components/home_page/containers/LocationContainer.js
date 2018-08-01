import { connect } from 'react-redux'
import { updateLocation, updateCoordinates } from '../../../redux/actions/actions.js'
import LocationComponent from '../components/LocationComponent.js'

const mapStateToProps = (state) => {
    return {
        location: state.issApi.location
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeLocation: (location) => {
      dispatch(updateLocation(location))
    },
    onSubmitLocation: (location) => {
      dispatch(updateCoordinates(location))
    }
  }
}

const LocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationComponent)

export default LocationContainer