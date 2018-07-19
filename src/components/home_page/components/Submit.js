import React from 'react';
import { connect } from 'react-redux'

import { queryApi } from '../../../redux/actions/actions.js'

// Import images
import circle_three from '../../../assets/images/circle_three.png';

let values = {
    latitude: 25,
    longitude: 50,
    number: 100
}

const Submit = ({ dispatch }) => (
    <div className="step-container">
        <div className="step-component">
            <img src={circle_three} className="circle_number" alt="1" />
        </div>
        <div className="step-component">
            <form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(queryApi(values))
                }}
            >
                <button type="submit" className="button middle calculate">
                    Calculate Passovers
                </button>
            </form>
        </div>
    </div>
)

export default connect()(Submit)