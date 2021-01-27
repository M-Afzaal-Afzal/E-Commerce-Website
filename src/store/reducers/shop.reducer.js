import * as actionTypes from '../actionTypes/actionTypes';
import {cloneDeep} from 'lodash'

import {SHOP_DATA} from './shop.data'

const INITIAL_STATE = SHOP_DATA;

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_ONE_ITEM: {
            const collections = cloneDeep(state);
            // const collection = collections[action.category];
            // const collectionItems = collections.items;
            // const collectionItem = collectionItems.find(item => item.id === action.id);
            // const collectionItemQuantity = collectionItem.quantity;
            collections[action.category].items.find(item => item.id === action.id).quantity += 1;
            return collections;
        }
        case actionTypes.REMOVE_ONE_ITEM: {
            const collections = cloneDeep(state);
            const quantity = collections[action.category].items.find(item => item.id === action.id).quantity;
            collections[action.category].items.find(item => item.id === action.id).quantity = Math.max(quantity - 1, 1);
            return collections;
        }

        case actionTypes.IS_ADDED_TO_CART_FALSE: {
            const collections = cloneDeep(state);
            collections[action.category].items.find(item => item.id === action.id).isAddedToCart = false;
            return collections;
        }

        case actionTypes.IS_ADDED_TO_CART_TRUE: {
            const collections = cloneDeep(state);
            collections[action.category].items.find(item => item.id === action.id).isAddedToCart = true;
            return collections;
        }

        default:
            return state;
    }
}

export default reducer;