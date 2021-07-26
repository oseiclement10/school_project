import * as actionTypes from '../constants/articleConstant';

export const getArticles = (state={ articles:[] },action) =>{
    switch(action.type){
        case actionTypes.GET_ARTICLES_REQUEST :
            return{
                loading:true,
                articles:[]
            };
        case actionTypes.GET_ARTICLES_SUCCESS :
            return{
                loading:false,
                articles:action.payload
            };
        case actionTypes.GET_ARTICLES_FAIL :
            return{ 
                loading:false,
                error:action.payload
            };
        default : 
            return state;       
    }
}


export const getArticleDetail = (state={article:{} },action) =>{
        switch(action.type){
            case actionTypes.GET_ARTICLES_DETAIL_REQUEST :
                return {
                    loading:true,
                };
            case actionTypes.GET_ARTICLES_DETAIL_SUCCESS :
                return{
                    loading:false,
                    article:action.payload
                };
            case actionTypes.GET_ARTICLES_DETAIL_FAIL :
                return{
                    loading:false,
                    error:action.payload            
                };
            case actionTypes.GET_ARTICLES_DETAIL_RESET :
                return{
                    loading:false,
                    article:{}
                };
            default : 
            return state;    
        }
}

