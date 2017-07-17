import { combineReducers } from 'redux';
import filterMode from './filterMode';
import arrWords from './arrWords';
import error from './error';
import isLoading from './isLoading';

const reducer = combineReducers({ filterMode, arrWords, error, isLoading });

export default reducer;
