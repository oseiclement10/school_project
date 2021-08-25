import * as actionTypes from '../constants/userConstant';

export const getUser = (state={user:{}},action)=>{
    switch(action.type){
        case actionTypes.LOGIN_USER_SUCCESS :
            return {
                user:action.payload,
                islogged:true
            }
        case actionTypes.LOGIN_USER_FAIL :
            return {
                error:action.payload,
                islogged:false
            }
        case actionTypes.LOGOUT_USER :
            return {
                user:{},
                islogged:false
            } 
        default:
            return state;    
    }
}

