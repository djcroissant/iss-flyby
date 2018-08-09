import {
    UPDATE_LOCATION,
    REQUEST_COORDINATES,
    RECEIVE_COORDINATES,
    REQUEST_FLYBYS,
    RECEIVE_FLYBYS
} from '../actions/actions.js';

const initialState = {
    location: {
      userInput: '',
      isFetching: false,
      didInvalidate: false,
      coordinates: {
        latitude: 47.6062,
        longitude: -122.3321
      }
    },
    map: {
      zoom: 0
    },
    time_window: {
      on: '',
      off: ''
    },
    flybys: {
      flybys: [],
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
        },
        map: {
          ...state.map,
          zoom: action.zoom
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