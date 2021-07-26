import * as actionTypes from '../constants/userConstant';

export const getUser = (state={user:{}},action)=>{
    switch(action.type){
        case actionTypes.LOGIN_USER_SUCCESS :
            return {
                user:action.payload
            }
        case actionTypes.LOGIN_USER_FAIL :
            return {
                user:action.payload
            }
        case actionTypes.LOGOUT_USER :
            return {
                user:{}
            } 
        default:
            return state;    
    }
}

