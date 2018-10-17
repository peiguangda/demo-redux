import axios from 'axios';
import {userConstants} from "../constants";

const apiUrl = 'http://localhost:8000/v1/historys/';

export const history = () => {
    return (dispatch) => {
        return axios({
            method: 'GET',
            url: apiUrl,
            headers: {Authorization: localStorage.getItem("access_token")}
        })
            .then(response => {
                dispatch(getHistory(response));
            })
            .catch(error => {
            });
    };
};


export function getHistory(response) {
    return {
        type: userConstants.GET_HISTORY_SUCCESS,
        data: response.data
    }
}