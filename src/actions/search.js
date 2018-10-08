import {searchConstants} from '../constants';
import axios from 'axios';

const apiUrl = 'http://localhost:8000/';

export const search = word => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/v1/search`, {search: {id: word}})
            .then(response => {
                // console.log(response.data.result);
                dispatch(createSearch(response));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export function createSearch(response) {
    console.log("Search:");
    console.log(response);
    return {
        type: searchConstants.SEARCH_SUCCESS,
        result: response.data.result
    }
}
