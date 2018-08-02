import React from 'react';

// Import images
import circle_three from '../../../assets/images/circle_three.png';

class SubmitComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmitApiQuery(this.props.coordinates)
  }

  render() {
    return (
      <div className="step-container">
        <div className="step-component">
          <img src={circle_three} className="circle_number" alt="1" />
        </div>
        <div className="step-component">
          <form onSubmit={this.handleSubmit}>
            <button type="submit" className="button middle calculate">
              Calculate Passovers
                </button>
          </form>
        </div>
      </div>
    )
  }
}

export default SubmitComponent


//   render() {
//     return (
//       <div className="step-container">
//         <div className="step-component">
//           <img src={circle_three} className="circle_number" alt="1" />
//         </div>
//         <div className="step-component">
//           <form
//             onSubmit={e => {
//               e.preventDefault()
//               dispatch(fetchFlybys(values))
//             }}
//           >
//             <button type="submit" className="button middle calculate">
//               Calculate Passovers
//                 </button>
//           </form>
//         </div>
//       </div>
//     )
//   }
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