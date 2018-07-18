import {
    QUERY_API
} from '../actions/actions.js';

const initialState = {
    location: '',
    latitude: '',
    longitude: '',
    earliest: '',
    latest: '',
    flybys: ''
};

function homeForm(state=initialState, action) {
    switch (action.type) {
        case QUERY_API:
            return {
                ...state,
                flybys: action.apiResponse
            };
        default:
            return state;
    };
};

export default homeForm;