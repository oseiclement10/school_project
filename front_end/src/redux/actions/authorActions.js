import axios from "axios";


import * as actionTypes from '../constants/authorConstant';

export const getAuthor=(id)=>async(dispatch)=>{
try{
    const {data} = await axios.get(`/author/${id}`);
    dispatch({type:actionTypes.GET_AUTHOR_SUCCESS,
    payload:data})
}catch(error){
    dispatch({
        type:actionTypes.GET_AUTHOR_FAILURE,
        payload:error.response && error.response.data.message?error.response.data.message:error.message
    })
}
}

export const resetAuthor = () => (dispatch)=>{
    dispatch({
        type:actionTypes.RESET_AUTHOR
    })
}