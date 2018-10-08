import {userConstants} from '../constants';

const initialState = {
    loggingIn: true,
    email: "",
};

function authentication(state = initialState, action = {}) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {...state};
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggingIn: true,
                email: action.email,
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                loggingIn: false,
            };
        case userConstants.LOGOUT:
            return {};
        default:
            return {...state}
    }
}

export default authentication;
