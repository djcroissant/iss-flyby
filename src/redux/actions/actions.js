import axios from 'axios';

// Action types
export const QUERY_API = 'QUERY_API';

// Creat dummy values until user input is hooked up
// let values = {
//     latitude: 25,
//     longitude: 50,
//     number: 100
// }

// export function queryApi(values) {
//     return (dispatch) => {
//         axios.get(
//             "http://api.open-notify.org/iss-pass.json?lat=" +
//             values.latitude.toString() +
//             "&lon=" +
//             values.longitude.toString() +
//             "&n=" +
//             values.number.toString()
//         ).then(response => {
//             let apiResponse = response.data.response;
//             dispatch({
//                 type: 'QUERY_API',
//                 apiResponse
//             });
//         }).catch((err) => {
//             console.log(err);
//         });
//     };
// };

export function queryApi(values) {
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