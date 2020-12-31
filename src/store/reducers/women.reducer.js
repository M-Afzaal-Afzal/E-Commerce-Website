import * as types from '../actionTypes/actionTypes';

import {addProduct,subProduct,toggleCart} from './reducerUtils'

const initialState = {
    'name': 'WOMEN',
    'image': '/womens.jpg',
    products: [
        {
            'name': 'Blue Tanktop',
            'price': '50',
            'brand': 'WOMENS',
            'category': 'WOMENS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/womens/blue-tank.png',
            isAddedToCart: false,
            id: 1,
        },{
            'name': 'Floral Blouse',
            'price': '45',
            'brand': 'WOMENS',
            'category': 'WOMENS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/womens/floral-blouse.png',
            isAddedToCart: false,
            id: 2,
        },{
            'name': 'Floral Dress',
            'price': '40',
            'brand': 'WOMENS',
            'category': 'WOMENS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/womens/floral-skirt.png',
            isAddedToCart: false,
            id: 3,
        },{
            'name': 'Red Dots Dress',
            'price': '150',
            'brand': 'WOMENS',
            'category': 'WOMENS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/womens/red-polka-dot-dress.png',
            isAddedToCart: false,
            id: 4,
        },

    ]
}

export const WomenReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_WOMEN_CART:
            return toggleCart(state,action.id);
        case types.ADD_ONE_WOMEN:
            return addProduct(state,action.id);
        case types.SUB_ONE_WOMEN:
            return subProduct(state,action.id);
        default:
            return state;
    }
}

export default WomenReducer;