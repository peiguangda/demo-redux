import {searchConstants} from '../constants';
import axios from 'axios';

const apiUrl = 'http://localhost:8000';

export const search = word => {
    return (dispatch) => {
        return axios({
            method: 'POST',
            url: `${apiUrl}/v1/search`,
            data: {search: {id: word}},
            headers: {Authorization: localStorage.getItem("access_token")}
        })
            .then(response => {
                dispatch(createSearch(response));
                saveToHistory(word);
            })
            .catch(error => {
                if (error.error === "Not Found") {
                    dispatch(searchFail());
                }
            });
    };
};

export function createSearch(response) {
    return {
        type: searchConstants.SEARCH_SUCCESS,
        result: response.data.result
    }
}

export function searchFail() {
    return {
        type: searchConstants.SEARCH_FAIL,
    }
}

export function saveToHistory(word) {
    axios({
        method: 'POST',
        url: `${apiUrl}/v1/historys`,
        data: {historys: {word: word}},
        headers: {Authorization: localStorage.getItem("access_token")}
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {

        });
}