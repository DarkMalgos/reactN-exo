import { combineReducers } from 'redux';

//libraries
import AuthReducer from './AuthReducer';

export default combineReducers({
    auth: AuthReducer
});