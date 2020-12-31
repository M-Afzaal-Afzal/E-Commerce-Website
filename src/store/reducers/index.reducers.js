import { combineReducers } from 'redux';
import hatsReducer from './hats.reducer';
import glassesReducer from './glasses.reducer';
import jacketsReducer from './jackets.reducer';
import mensReducer from './mens.reducer';
import womensReducer from './women.reducer';
import sneakersReducer from './sneakers.reducer';



// COMBINED REDUCERS
const reducers = {
    hats: hatsReducer,
    sneakers: sneakersReducer,
    womens: womensReducer,
    mens: mensReducer,
    jackets: jacketsReducer,
    glasses: glassesReducer,
}

export default combineReducers(reducers)