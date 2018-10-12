import {suggestConstants} from '../constants';

const initialState = {
};

function suggest(state = initialState, action = {}) {
    switch (action.type) {
        case suggestConstants.SUGGEST_REQUEST:
            return {...state};
        case suggestConstants.SUGGEST_SUCCESS:
            return {
                ...state,
                result: action.result,
                options: action.options
            };
        case suggestConstants.SUGGEST_FAIL:
            return {
                ...state,
            };
        default:
            return {...state}
    }
}

export default suggest;
