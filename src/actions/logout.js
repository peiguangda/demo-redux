import {userConstants} from '../constants';

export const logout = () => {
    return (dispatch) => {
        dispatch(logoutSuccess());
    };
};

export function logoutSuccess() {
    localStorage.removeItem('access_token');
    return {
        type: userConstants.LOGOUT,
    }
}

