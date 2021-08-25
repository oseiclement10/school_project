import axios from 'axios';

import * as actionTypes from '../constants/cartConstant';

export const addToCart = (id,qty) => async(dispatch,getState)=>{
    
    const {data} = await axios.get(`/products/${id}`);
    dispatch({
        type:actionTypes.ADD_TO_CART,
        
        payload:{
            product:data._id,
            title:data.title,
            imageUrl:data.imageUrl,
            price:data.price,
        },

    });
    localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems));
   
}

export const removeFromCart = (id) =>(dispatch,getState)=>{
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload:id,
    });
    localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems));
}