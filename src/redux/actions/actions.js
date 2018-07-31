import axios from 'axios';

// export function updateLocation (location) {
//   return (dispatch) => {
//     dispatch({
//       type: 'UPDATE_LOCATION',
//       location
//     })
//   }
// }

export const updateLocation = (location) => {
  console.log(location)
  return ({
    type: 'UPDATE_LOCATION',
    location
  })
}


export function updateCoordinates (location) {
  // replace these static variables with a call to Google Maps API
  const latitude = 50
  const longitude = 45
  console.log('updating coordinates with DEFAULT values.')

  return (dispatch) => {
    dispatch({
      type: 'UPDATE_COORDINATES',
      latitude,
      longitude
    })
  }
}

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