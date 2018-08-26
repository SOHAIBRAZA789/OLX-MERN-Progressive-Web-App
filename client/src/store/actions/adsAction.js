import { GET_ADS, ADD_AD, DELETE_AD,ADS_LOADING } from '../actions/types';

//SET_EXPENSES
export const getAds = () =>dispatch=> {
    dispatch(setAdsLoading());
    fetch('/api/ads', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(adsList => {
                dispatch({
                    type: GET_ADS,
                    payload:adsList
                })
            });  
    
   
};

export const setAdsLoading = () => ({
    type: ADS_LOADING,
});