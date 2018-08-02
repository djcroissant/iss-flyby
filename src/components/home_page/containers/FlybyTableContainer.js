import { connect } from 'react-redux'
import FlybyTableComponent from '../components/FlybyTableComponent.js'

const mapStateToProps = (state) => {
  return {
        flybys: state.issApi.flybys.flybys
    }
}

const FlybyTableContainer = connect(
  mapStateToProps
)(FlybyTableComponent)

export default FlybyTableContainer