import { combineReducers } from 'redux';
import authentication from './authentication';
import search from './search';
import suggest from './suggest';

const reducers = combineReducers({
    authentication,
    search,
    suggest
});

export default reducers;
