import {combineReducers,applyMiddleware,createStore} from 'redux';
import {composeWithDevTools}  from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {getArticles,getArticleDetail} from './reducers/articleReducer';
import { getUser } from './reducers/userReducer';
const middleware = [thunk];

const allReducers = combineReducers({
    articles:getArticles,
    getArticleDetail:getArticleDetail,
    currentUser:getUser,
});

const store = createStore(allReducers,composeWithDevTools(applyMiddleware(...middleware)));

export default store;
