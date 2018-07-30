import React from 'react';
import { connect } from 'react-redux';
import { updateLocation } from '../../../redux/actions/actions.js';

// Import images
import circle_one from '../../../assets/images/circle_one.png';

let UpdateLocation = ({ dispatch }) => {
  let input

  return (
    <div className="step-container">
      <div className="step-component">
          <img src={circle_one} className="circle_number" alt="1" />
      </div>
      <div className="step-component">
        <h3>Enter your location</h3>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(updateLocation(input.value))
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit" className="button middle calculate">
            Search
          </button>
        </form>
      </div>
      <div className="step-component">
        <h3>MAP</h3>
        <h3>MAP</h3>
        <h3>MAP</h3>
        <h3>MAP</h3>
        <h3>MAP</h3>
        <h3>MAP</h3>
      </div>
    </div>
  )
}

UpdateLocation = connect()(UpdateLocation)

export default UpdateLocation