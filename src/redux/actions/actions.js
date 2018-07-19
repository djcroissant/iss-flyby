import axios from 'axios';

// Action types
export const QUERY_API = 'QUERY_API';

export function queryApi(values=values) {
    return (dispatch) => {

        const request = axios.get(
            "http://api.open-notify.org/iss-pass.json?lat=" +
            values.latitude.toString() +
            "&lon=" +
            values.longitude.toString() +
            "&n=" +
            values.number.toString()
        )
        
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