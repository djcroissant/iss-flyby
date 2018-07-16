const initialState = {
    flybys: []
};

export default (state=initialState, action) => {
    switch (action.type) {
        case 'QUERY':
            return {
                ...state,
                flybys: action.apiResponse
            };
        default:
            return state;
    };
};