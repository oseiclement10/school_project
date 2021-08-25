import axios from "axios";

import * as actionTypes from '../constants/userConstant';

export const getUserr = () => async(dispatch)=>{
    try{
        const {data} = await axios.get('/users/currentUser');
        if(data === ""){
            dispatch({
                type:actionTypes.LOGIN_USER_FAIL,
                payload:{}
            })
        }else{
            dispatch({
                type:actionTypes.LOGIN_USER_SUCCESS,
                payload:data,
            });        
        }
    }catch(error){
        dispatch({
            type:actionTypes.LOGIN_USER_FAIL,
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
    
}

export const logOutUser = () => async(dispatch)=>{
    await axios.get('/users/logout');
    dispatch({
        type:actionTypes.LOGOUT_USER
    })
}

