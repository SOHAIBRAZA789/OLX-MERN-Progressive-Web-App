import { combineReducers } from 'redux';
import adsReducer from './adsReducer';
import authReducer from './authReducer';


export default combineReducers({
    ads: adsReducer,
    auth: authReducer
});