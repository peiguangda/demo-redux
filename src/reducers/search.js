import {searchConstants} from '../constants';

const initialState = {
    loggingIn: true,
};

function search(state = initialState, action = {}) {
    switch (action.type) {
        case searchConstants.SEARCH_REQUEST:
            return {...state};
        case searchConstants.SEARCH_SUCCESS:
            return {
                ...state,
                result: action.result
            };
        case searchConstants.SEARCH_FAIL:
            return {
                ...state,

            };
        default:
            return {...state}
    }
}

export default search;
