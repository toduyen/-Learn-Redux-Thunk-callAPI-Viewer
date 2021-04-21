import { combineReducers } from 'redux';
import  postReducer  from '../reducer/postReducer';
const reducers = combineReducers({
    posts: postReducer
})
export default (state,action) => reducers(state,action);