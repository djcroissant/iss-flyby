import React from 'react';
import TimePicker from 'react-time-picker';

// Import images
import circle_two from '../../../assets/images/circle_two.png';

class TimeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChangeOn(time) {
    this.props.onChangeTimeOn(time)
  }

  handleChangeOff(time) {
    this.props.onChangeTimeOff(time)
  }

  render() {
    return (
      <div className="step-container">
        <div className="step-component">
          <img src={circle_two} className="circle_number" alt="2" />
        </div>
        <div className="step-component">
          <h3>Enter your timeframe</h3>
          <div className="time-selections">
            <div className="time-select">
              <span>Earliest:</span>
              <TimePicker
                onChange={this.handleChangeOn}
                value={this.props.time.on}
              />
            </div>
            <div className="time-select">
              <span>Latest:</span>
              <TimePicker
                onChange={this.handleChangeOff}
                value={this.props.time.off}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeComponent