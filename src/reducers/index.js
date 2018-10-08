import { combineReducers } from 'redux';
import authentication from './authentication';
import search from './search';

const reducers = combineReducers({
    authentication,
    search
});

export default reducers;
