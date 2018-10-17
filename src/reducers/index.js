import { combineReducers } from 'redux';
import authentication from './authentication';
import search from './search';
import suggest from './suggest';
import history from './history';

const reducers = combineReducers({
    authentication,
    search,
    suggest,
    history
});

export default reducers;
