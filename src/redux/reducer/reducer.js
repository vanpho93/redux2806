import { combineReducers } from 'redux';
import filterMode from './filterMode';
import arrWords from './arrWords';

const reducer = combineReducers({ filterMode, arrWords });

export default reducer;
