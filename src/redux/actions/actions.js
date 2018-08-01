import axios from 'axios';

export const updateLocation = (location) => {
  console.log(location)
  return ({
    type: 'UPDATE_LOCATION',
    location
  })
}

// export const updateCoordinates = (location) => {
//   let url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
//       url = url + location.replace(" ", "+")
//       url = url + "&key=" + "AIzaSyDuBk79WTkUsUz_2cuy-O7nP_6LI2WtYWo"
//       console.log(url)
//   const latitude=50
//   const longitude=40



//   return ({
//     type: 'UPDATE_COORDINATES',
//     latitude,
//     longitude
//   })
// }

export const updateCoordinates = (location) => {
  const latitude=50
  const longitude=40

  const location_query = location.replace(" ", "+")
  const url="http://localhost:3001/"


  const request = axios.get(`${url}locations/api_query/${location_query}`)
  request.then(response => {
    console.log(response)
  })
  return ({
    type: 'UPDATE_COORDINATES',
    latitude,
    longitude
  })
}


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

export function queryApi(values) {
  return (dispatch) => {

    const request = axios.get(
      "https://open-notify.herokuapp.com/iss-pass.json?lat=" +
      values.latitude.toString() +
      "&lon=" +
      values.longitude.toString() +
      "&n=" +
      values.number.toString()
    );
    console.log(request);

    return request.then(response => {
      let apiResponse = response.data.response;
      dispatch({
        type: 'QUERY_API',
        apiResponse
      })
    }).catch((err) => {
      console.log(err);
    });
  };
};