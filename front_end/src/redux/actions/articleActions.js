import axios from 'axios';
import * as actionTypes from '../constants/articleConstant';

export const getAllArticles = () => async (dispatch)=>{
   try{
       dispatch({type:actionTypes.GET_ARTICLES_REQUEST});
       const {data} = await axios.get('/products');
       dispatch({
           type:actionTypes.GET_ARTICLES_SUCCESS,
           payload:data,
       });

   }catch(error){
        dispatch({
            type:actionTypes.GET_ARTICLES_FAIL,
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
   }

}
export const getArticleDetail = (id) =>async(dispatch)=>{
    
    try{
        dispatch({type:actionTypes.GET_ARTICLES_DETAIL_REQUEST});
        const {data} = await axios.get(`/products/${id}`);
        
        dispatch({
            type:actionTypes.GET_ARTICLES_DETAIL_SUCCESS,
            payload:data
        });
    
    }catch(error){
        dispatch({
            type:actionTypes.GET_ARTICLES_DETAIL_FAIL,
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
    
}

export const removeArticleDetail = () =>(dispatch) => {
    dispatch({
        type:actionTypes.GET_ARTICLES_DETAIL_RESET
    })
}