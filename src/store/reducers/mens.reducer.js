import * as types from '../actionTypes/actionTypes';

import {addProduct,subProduct,toggleCart} from './reducerUtils'

const initialState = {
    'name': 'MENS',
    'image': '/mens.jpg',
    products: [
        {
            'name': 'Camo Down Vest',
            'price': '120',
            'brand': 'MENS',
            'category': 'MENS',
            'variant': 'Gray',
            'quantity': 1,
            id: 1,
            image: '/mens/camo-vest.png',
            isAddedToCart: false,
        }, {
            'name': 'Floral T-shirt',
            'price': '30',
            'brand': 'MENS',
            'category': 'MENS',
            'variant': 'Gray',
            'quantity': 1,
            id: 2,
            image: '/mens/floral-shirt.png',
            isAddedToCart: false,
        }, {
            'name': 'Black & White Longsleeve',
            'price': '20',
            'brand': 'MENS',
            'category': 'MENS',
            'variant': 'Gray',
            'quantity': 1,
            id: 3,
            image: '/mens/long-sleeve.png',
            isAddedToCart: false,
        }, {
            'name': 'Pink T-shirt',
            'price': '25',
            'brand': 'MENS',
            'category': 'MENS',
            'variant': 'Gray',
            'quantity': 1,
            id: 4,
            image: '/mens/pink-shirt.png',
            isAddedToCart: false,
        }
    ]
}

export const MensReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.TOGGLE_MEN_CART:
            return toggleCart(state, action.id);
        case types.ADD_ONE_MEN:
            return addProduct(state,action.id);
        case types.SUB_ONE_MEN:
            return subProduct(state,action.id);
        default:
            return state;
    }
}

export default MensReducer;