import { combineReducers } from 'redux';
import adsReducer from './adsReducer';
import authReducer from './auth';


export default combineReducers({
    ads: adsReducer,
    auth: authReducer
});