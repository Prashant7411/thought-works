import { combineReducers } from 'redux';
import { moviesReducer, filterReducer, countriesReducer } from './moviesReducer'

export default combineReducers({
  moviesReducer,
  filterReducer,
  countriesReducer
})