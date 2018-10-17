import {userConstants} from '../constants';

const initialState = {
    loggingIn: false,
    email: "",
};

function authentication(state = initialState, action = {}) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {...state};
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: true,
                loggingIn: true,
                email: action.email,
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: true,
                loggingIn: false,
            };
        case userConstants.LOGOUT:
            return {
                ...state,
                loading: true,
                loggingIn: false,
            };
        default:
            return {...state}
    }
}

export default authentication;
