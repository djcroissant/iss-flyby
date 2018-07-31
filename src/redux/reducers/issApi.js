// import {
//     QUERY_API
// } from '../actions/actions.js';

const initialState = {
    location: 'seattle',
    latitude: '',
    longitude: '',
    earliest: '',
    latest: '',
    flybys: ''
};

function issApi(state=initialState, action) {
  switch (action.type) {
    case 'QUERY_API':
      return {
        ...state,
        flybys: action.apiResponse
      }
    case 'UPDATE_LOCATION':
      return {
        ...state,
        location: action.location
      }
    case 'UPDATE_COORDINATES':
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude
      }
    default:
      return state
  }
}

export default issApi