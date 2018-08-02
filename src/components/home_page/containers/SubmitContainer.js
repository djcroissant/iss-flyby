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

// import React from 'react';
// import { connect } from 'react-redux'

// import { fetchFlybys } from '../../../redux/actions/actions.js'

// // Import images
// import circle_three from '../../../assets/images/circle_three.png';

// // Create dummy values until user input is hooked up
// let values = {
//     latitude: 25,
//     longitude: 50,
//     number: 100
// }

// const Submit = ({ dispatch }) => (
//     <div className="step-container">
//         <div className="step-component">
//             <img src={circle_three} className="circle_number" alt="1" />
//         </div>
//         <div className="step-component">
//             <form
//                 onSubmit={e => {
//                     e.preventDefault()
//                     dispatch(fetchFlybys(values))
//                 }}
//             >
//                 <button type="submit" className="button middle calculate">
//                     Calculate Passovers
//                 </button>
//             </form>
//         </div>
//     </div>
// )

// export default connect()(Submit)