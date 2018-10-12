import {searchConstants} from '../constants';
import axios from 'axios';

const apiUrl = 'http://localhost:8000';

export const search = word => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/v1/search`, {search: {id: word}, headers:{Authorization: localStorage.getItem("access_token")}})
            .then(response => {
                dispatch(createSearch(response));
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