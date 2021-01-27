import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import shopReducer from './shop.reducer';
import cartReducer from './cart.reducer';



// COMBINED REDUCERS
const reducers = {
    user: userReducer,
    shop: shopReducer,
    cart: cartReducer,
}

export default combineReducers(reducers)