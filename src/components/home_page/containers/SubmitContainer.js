import { connect } from 'react-redux'
import { fetchFlybys } from '../../../redux/actions/actions.js'
import SubmitComponent from '../components/SubmitComponent.js'

const mapStateToProps = (state) => {
  return {
      coordinates: state.issApi.location.coordinates,
      flybys: state.issApi.flybys.apiResponse
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitApiQuery: (coordinates) => {
      dispatch(fetchFlybys(coordinates))
    }
  }
}

const SubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitComponent)

export default SubmitContainer
