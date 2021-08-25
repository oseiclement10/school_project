import * as actionTypes from '../constants/cartConstant';

export const cartReducer = (state={cartItems:[]}, action) => {
        switch (action.type){
            
            case actionTypes.ADD_TO_CART :
                const item = action.payload;
                
                let existItem = state.cartItems.find((elem)=>elem.product === item.product);

                if(existItem){
                    return {
                        ...state,
                        cartItems: state.cartItems.map((elem)=>elem.product === existItem.product ? item:elem),
                    }
                }else{
                     return{
                         ...state,
                         cartItems: [...state.cartItems,item]
                     }
                    }
            case actionTypes.REMOVE_FROM_CART :
                 return {
                     ...state,
                     cartItems:state.cartItems.filter(elem=>elem.product !== action.payload)
                 }
            default:
                return state;             
                }
        }