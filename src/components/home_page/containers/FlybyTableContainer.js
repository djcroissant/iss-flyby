import { connect } from 'react-redux'
import FlybyTableComponent from '../components/FlybyTableComponent.js'

const mapStateToProps = (state) => {
  return {
        flybys: state.issApi.flybys.flybys,
        time: state.issApi.time_window
    }
}

const FlybyTableContainer = connect(
  mapStateToProps
)(FlybyTableComponent)

export default FlybyTableContainer