import {combineReducers,applyMiddleware,createStore} from 'redux';
import {composeWithDevTools}  from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {getArticles,getArticleDetail} from './reducers/articleReducer';
import { getUser } from './reducers/userReducer';
import {cartReducer} from './reducers/cartReducer';
import {getAuthor} from './reducers/authorReducer';
const middleware = [thunk];

const allReducers = combineReducers({
    articles:getArticles,
    getArticleDetail:getArticleDetail,
    currentUser:getUser,
    cart:cartReducer,
    author:getAuthor,
});
const cart_from_local_storage = localStorage.getItem('cart')?JSON.parse(localStorage.getItem("cart")):[];

const INITIAL_STATE = {
    cart:{
       cartItems:cart_from_local_storage,
    }
 };

const store = createStore(allReducers,INITIAL_STATE,composeWithDevTools(applyMiddleware(...middleware)));

export default store;
