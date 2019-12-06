import {combineReducers} from 'redux';

export const products = (state = {
    list: [],
    viewType: 'comfort'
}, action) => {
 switch (action.type) {
  case 'GET_PRODUCT_LIST':
   return {
       ...state,
    list: action.payload
   }
  case 'SET_PRODUCT_VIEW_TYPE':
   return {
       ...state,
    viewType: action.payload
   }
  default:
   return state
 }
}

export default combineReducers({
    products
});