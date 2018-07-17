const initialState = {
    alerts: [],
    alert: {}
};

export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_ALERTS':
            return {
                ...state,
                alerts: action.alerts
            };
        case 'EDIT_ALERT':
            return {
                ...state,
                alert: action.alert
            };
        default:
            return state;
    };
};