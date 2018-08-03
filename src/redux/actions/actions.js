import axios from 'axios';

export const UPDATE_LOCATION = 'UPDATE_LOCATION'
export function updateLocation(userLocationInput) {
  return {
    type: UPDATE_LOCATION,
    userInput: userLocationInput
  }
}

export const REQUEST_COORDINATES = 'REQUEST_COORDINATES'
function requestCoordinates() {
  return {
    type: REQUEST_COORDINATES
  }
}

export const RECEIVE_COORDINATES = 'RECEIVE_COORDINATES'
function receiveCoordinates(response) {
  return {
    type: RECEIVE_COORDINATES,
    coordinates: {
      latitude: response.data.latitude,
      longitude: response.data.longitude
    },
    zoom: 12
  }
}

export const REQUEST_FLYBYS = 'REQUEST_FLYBYS'
export function requestFlybys() {
  return {
    type: REQUEST_FLYBYS
  }
}

export const RECEIVE_FLYBYS = 'RECEIVE_FLYBYS'
export function receiveFlybys(json) {
  return {
    type: RECEIVE_FLYBYS,
    flybys: json.data.response,
    receivedAt: Date.now() 
  }
}

export function fetchCoordinates(userLocationInput) {
  return function (dispatch) {
    dispatch(requestCoordinates())

    const location_query = userLocationInput.replace(" ", "+")
    const url="http://localhost:3001/"
    return axios.get(`${url}locations/api_query/${location_query}`)
      .then(
        response => dispatch(receiveCoordinates(response))
      )
      .catch(
        error => console.log('An error occurred: ', error)
      )
  }
}

export function fetchFlybys(coordinates) {
  return function (dispatch) {
    dispatch(requestFlybys())

    const number_flybys = 100
    const url = "https://open-notify.herokuapp.com/iss-pass.json?lat=" +
      coordinates.latitude.toString() +
      "&lon=" +
      coordinates.longitude.toString() +
      "&n=" +
      number_flybys.toString()

    return axios.get(url)
      .then(
        response => dispatch(receiveFlybys(response))
      )
      .catch(
        error => console.log('An error occurred: ', error)
      )
  }
}