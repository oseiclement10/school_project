import axios from "axios";

import * as actionTypes from '../constants/userConstant';

export const getUserr = () => async(dispatch)=>{
    try{
        const {data} = await axios.get('/users/currentUser');
    dispatch({
        type:actionTypes.LOGIN_USER_SUCCESS,
        payload:data,
    });
    }catch(error){
        dispatch({
            type:actionTypes.LOGIN_USER_FAIL,
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
    
}

export const logOutUser = () => async(dispatch)=>{
    dispatch({
        type:actionTypes.LOGOUT_USER
    })
}

