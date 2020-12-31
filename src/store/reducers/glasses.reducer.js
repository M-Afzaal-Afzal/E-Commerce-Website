import * as types from '../actionTypes/actionTypes'
import {toggleCart,addProduct,subProduct} from "./reducerUtils";

const initialState = {
    'name': 'GLASSES',
    'image': '/glasses.jpg',
    products: [
        {
            'name': 'LYA',
            'price': '199',
            'brand': 'LYA',
            'category': 'GLASSES',
            'variant': 'Gray',
            'quantity': 1,
            image: '/glasses/lya.jpg',
            isAddedToCart: false,
            id: 1,
        },
        {
            'name': 'ALFRED SUNG',
            'price': '279',
            'brand': 'ALFRED SUNG',
            'category': 'GLASSES',
            'variant': 'Gray',
            'quantity': 1,
            image: '/glasses/alfredSung.jpg',
            isAddedToCart: false,
            id: 2,
        },
        {
            'name': 'OGI',
            'price': '289',
            'brand': 'OGI',
            'category': 'GLASSES',
            'variant': 'Gray',
            'quantity': 1,
            image: '/glasses/ogi.jpg',
            isAddedToCart: false,
            id: 3,
        }, {
            'name': 'NIKE',
            'price': '267',
            'brand': 'NIKE',
            'category': 'GLASSES',
            'variant': 'Gray',
            'quantity': 1,
            image: '/glasses/nike.jpg',
            isAddedToCart: false,
            id: 4,
        },

    ]
}

const GlassesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_GLASS_CART:
            return toggleCart(state, action.id);
        case types.ADD_ONE_GLASS:
            return addProduct(state,action.id);
        case types.SUB_ONE_GLASS:
            return subProduct(state,action.id);
        default:
            return state;
    }
}

export default GlassesReducer;