import { connect } from 'react-redux'
import { updateLocation, updateCoordinates } from '../../../redux/actions/actions.js'
import LocationComponent from '../components/LocationComponent.js'

const mapStateToProps = (state) => {
    return {
        location: state.issApi.location
    }
}

const mapDispatchToProps = ({
  onSubmitLocation: updateCoordinates,
  onChangeLocation: updateLocation
})

const LocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationComponent)

export default LocationContainer