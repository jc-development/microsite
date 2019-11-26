import { combineReducers } from 'redux';
import homeReducer from './../home/reducer';

const rootReducer = combineReducers({
  productLists: homeReducer
});

export default rootReducer;
