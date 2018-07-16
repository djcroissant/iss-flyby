import axios from 'axios';

const url = "http://localhost:8000/";

export function loadAlerts() {
    return (dispatch) => {
        axios.get(`${url}alerts`)
        .then((res) => {
            let alerts = res.data
            dispatch({type:'LOAD_ALERTS', alerts})
        }).catch((err) => {
            console.log(err)
        });
    };
};

export function editAlert() {
    return (dispatch) => {
        axios.get(`${url}alerts/${_id}/edit`)
        .then((res) => {
            let alert = res.data
            dispatch({type:'EDIT_ALERT', alert})
        }).catch((err) => {
            console.log(err)
        });
    };
};

export function getUser(_id) {
    return axios.get(`${url}user/${_id}`)
    .then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err)
    });
};

export function getUserProfile(_id) {
    return (dispatch) => {
        axios.get(`${url}user/profile/${_id}`)
        .then((res) => {
            let profile = res.data
            dispatch({type: 'SET_PROFILE', profile})
        }).catch((err) => {
            console.log(err)
        });
    };
};

export function logInUser (user_data) {
    return (dispatch) => {
        axios.post(`${url}login`, user_data)
        .then((res) => {
            let user = res.data
            localStorage.setItem('Auth', JSON.stringify(user))
            dispatch({type: 'SET_USER', user})
        }).catch((err) => {
            console.log(err)
        });
    };
};