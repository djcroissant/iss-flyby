import {
    UPDATE_LOCATION,
    REQUEST_COORDINATES,
    RECEIVE_COORDINATES,
    REQUEST_FLYBYS,
    RECEIVE_FLYBYS
} from '../actions/actions.js';

const initialState = {
    location: {
      userInput: 'seattle',
      isFetching: false,
      didInvalidate: false,
      coordinates: {
        latitude: '',
        longitude: ''
      }
    },
    time_window: {
      earliest: '',
      latest: ''
    },
    flybys: {
      apiResponse: '',
      isFetching: false,
      didInvalidate: false,
      lastUpdated: ''
    }
};

function issApi(state=initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION:
      return Object.assign({}, state, {
        ...state,
        location: {
          ...state.location,
          userInput: action.userInput
        }
      })
    case REQUEST_COORDINATES:
      return Object.assign({}, state, {
        ...state,
        location: {
          ...state.location,
          isFetching: true,
          didInvalidate: false
        }
      })
    case RECEIVE_COORDINATES:
      return Object.assign({}, state, {
        ...state,
        location: {
          ...state.location,
          isFetching: false,
          didInvalidate: false,
          coordinates: action.coordinates
        }
      })
    case REQUEST_FLYBYS:
      return Object.assign({}, state, {
        ...state,
        flybys: {
          ...state.flybys,
          isFetching: true,
          didInvalidate: false
        }
      })
      case RECEIVE_FLYBYS:
      return Object.assign({}, state, {
        ...state,
        flybys: {
          ...state.flybys,
          isFetching: false,
          didInvalidate: false,
          flybys: action.flybys,
          lastUpdated: action.receivedAt
        }
      })
    default:
      return state
  }
}

export default issApi