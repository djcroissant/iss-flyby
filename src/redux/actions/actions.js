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
    }
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

// export function queryApi(values) {
//   return (dispatch) => {

//     const request = axios.get(
//       "https://open-notify.herokuapp.com/iss-pass.json?lat=" +
//       values.latitude.toString() +
//       "&lon=" +
//       values.longitude.toString() +
//       "&n=" +
//       values.number.toString()
//     );
//     console.log(request);

//     return request.then(response => {
//       let apiResponse = response.data.response;
//       dispatch({
//         type: 'QUERY_API',
//         apiResponse
//       })
//     }).catch((err) => {
//       console.log(err);
//     });
//   };
// };




// export const updateCoordinates = (location) => {
//   const latitude=50
//   const longitude=40

//   return ({
//     type: 'UPDATE_COORDINATES',
//     latitude,
//     longitude
//   })
// }




// export function updateCoordinates(location) {
//   const location_query = location.replace(" ", "+")
//   const url="http://localhost:3001/"
//   let latitude=5
//   let longitude=6
//   console.log('hi!!!')


//   const request = axios.get(`${url}locations/api_query/${location_query}`)
//   return (request.then(response => ({
//     // latitude = response.data.latitude
//     // longitude = response.data.longitude 
//     type: 'UPDATE_COORDINATES',
//     latitude,
//     longitude
//   })))




  // return ({
  //   type: 'UPDATE_COORDINATES',
  //   latitude,
  //   longitude
  // })
// }


// export function updateCoordinates(location) {
//   return (dispatch) => {
//     let url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
//     // url = url + location.replace(" ", "+")
//     // url = url + "&key=" + ""
//     // console.log(url)

//     console.log('hi there!')
//     console.log(process.env.GOOGLE_MAPS_KEY)

//     const request = axios.get(url)

//     return request.then(response => {
//       let latitude = response.results[0].geometry.location.lat
//       let longitude = response.results[0].geometry.location.lng
//       console.log(response)
//       dispatch({
//         type: 'UPDATE_COORDINATES',
//         latitude,
//         longitude
//       })
//     }).catch((err) => {
//       console.log(err)
//     })
//   }
// } 

// export function queryApi(values) {
//   return (dispatch) => {

//     const request = axios.get(
//       "https://open-notify.herokuapp.com/iss-pass.json?lat=" +
//       values.latitude.toString() +
//       "&lon=" +
//       values.longitude.toString() +
//       "&n=" +
//       values.number.toString()
//     );
//     console.log(request);

//     return request.then(response => {
//       let apiResponse = response.data.response;
//       dispatch({
//         type: 'QUERY_API',
//         apiResponse
//       })
//     }).catch((err) => {
//       console.log(err);
//     });
//   };
// };