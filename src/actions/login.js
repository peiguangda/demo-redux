import {userConstants} from '../constants';
import axios from 'axios';

const apiUrl = 'http://localhost:8000/';

export const login = (email, password) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/v1/login`, {email, password})
            .then(response => {
                console.log(response.data.error);
                if (response.data.error === "invalid_email" || response.data.error === "invalid_password") {
                    dispatch(loginFail(response));
                } else {
                    dispatch(loginSuccess(response));
                }
            })
            .catch(error => {
                throw(error);
            });
    };
};

export function loginSuccess(response) {
    console.log("Login succes:");
    console.log(response);
    localStorage.setItem('email', response.data.email);
    localStorage.setItem('access_token', response.data.access_token);
    return {
        type: userConstants.LOGIN_SUCCESS,
        email: response.data.email,
        access_token: response.data.access_token
    }
}

export function loginFail(response) {
    console.log("Login fail:");
    console.log(response);
    return {
        type: userConstants.LOGIN_FAILURE,
    }
}
