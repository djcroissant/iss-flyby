import axios from 'axios';

export function updateLocation (location) {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_LOCATION',
      location
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