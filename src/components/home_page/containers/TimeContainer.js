import { connect } from 'react-redux'
import { updateTime } from '../../../redux/actions/actions.js'
import TimeComponent from '../components/TimeComponent.js'

const mapStateToProps = (state) => {
    return {
        time: state.issApi.time_window
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTimeOn: (time) => {
      dispatch(updateTimeOn(time))
    },
    onChangeTimeOff: (time) => {
      dispatch(updateTimeOff(time))
    }
  }
}

const TimeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeComponent)

export default TimeContainer