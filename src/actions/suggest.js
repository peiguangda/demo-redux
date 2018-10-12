import {suggestConstants} from '../constants';
import axios from 'axios';

const apiUrl = 'http://localhost:8000';

export const suggest = word => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/v1/searchs`, {search: {id: word}, headers:{Authorization: localStorage.getItem("access_token")} })
            .then(response => {
                dispatch(createSuggest(response));
            })
            .catch(error => {
                dispatch(suggestFail());
            });
    };
};

export function createSuggest(response) {
    const options = [];
    options.length = 0;
    response.data.result.results.map((item, index) => {
        return options.push({value: item.table.word, label: item.table.word})
    });
    return {
        type: suggestConstants.SUGGEST_SUCCESS,
        result: response.data.result,
        options: options
    }
}

export function suggestFail() {
    return {
        type: suggestConstants.SUGGEST_FAIL,
    }
}
