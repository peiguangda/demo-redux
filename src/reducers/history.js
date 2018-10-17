import {userConstants} from '../constants';

const initialState = {};

function suggest(state = initialState, action = {}) {
    switch (action.type) {
        case userConstants.GET_HISTORY_SUCCESS:
            return {
                ...state,
                data: action.data,
            };
        case userConstants.GET_HISTORY_FAILURE:
            return {
                ...state,
            };
        default:
            return {...state}
    }
}

export default suggest;
