import * as actionTypes from '../actionTypes/actionTypes';
import produce from "immer";

// import {SHOP_DATA} from './shop.data'

const INITIAL_STATE = {
    collections: null,
    isFetching: true,
    errorMessage: null,
};

const reducer = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COLLECTION_START: {
            draft.isFetching = true;
            break;
        }
        case actionTypes.FETCH_COLLECTION_SUCCESS: {
            draft.collections = action.collections;
            draft.isFetching = false;
            break;
        }

        case actionTypes.FETCH_COLLECTION_FAILURE: {
            return produce(state, draft => {
                draft.isFetching = false;
                draft.errorMessage = action.errorMessage;
            })

        }
        case actionTypes.ADD_ONE_ITEM: {
            draft.collections[action.category].items.find(item => item.id === action.id).quantity += 1;
            break;
        }

        case actionTypes.REMOVE_ONE_ITEM: {
            const quantity = draft.collections[action.category].items.find(item => item.id === action.id).quantity;
            draft.collections[action.category].items.find(item => item.id === action.id).quantity = Math.max(quantity - 1, 1);
            break;
        }

        default:
            break;
    }
}, INITIAL_STATE);

export default reducer;