import axios from 'axios';
import {loginSuccess, loginFail} from "./login";

const apiUrl = 'http://localhost:8000/v1/getUser/';

export const getInfo = () => {
    return (dispatch) => {
        return axios({
            method: 'POST',
            url: apiUrl,
            headers: {Authorization: localStorage.getItem("access_token")}
        })
            .then(response => {
                console.log(response);
                dispatch(loginSuccess(response));
            })
            .catch(error => {
                dispatch(loginFail());
            });
    };
};
