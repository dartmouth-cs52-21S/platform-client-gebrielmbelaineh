// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';
import postReducer from './postsReducer';
import AuthReducer from './authReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  auth: AuthReducer,
});

export default rootReducer;
