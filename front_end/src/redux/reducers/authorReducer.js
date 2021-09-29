import * as actionTypes from '../constants/authorConstant';

export const getAuthor = (state ={author:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_AUTHOR_SUCCESS :
            return {
                author : action.payload,
            }
        case actionTypes.GET_AUTHOR_FAILURE :
            return{
                error:action.payload ,
            }
        case actionTypes.RESET_AUTHOR :
            return{
                author:{}
            }
        default: 
            return state;
        }
}