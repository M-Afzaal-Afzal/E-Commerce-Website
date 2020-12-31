import * as types from '../actionTypes/actionTypes'

import {addProduct,subProduct,toggleCart} from './reducerUtils'

const initialState = {
    'name': 'JACKETS',
    'image': '/jackets.jpg',
    products: [
        {
            'name': 'Black Jean Shearling',
            'price': '150',
            'brand': 'JACKETS',
            'category': 'JACKETS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/jackets/black-shearling.png',
            isAddedToCart: false,
            id: 1,
        }, {
            'name': 'Blue Jean Jacket',
            'price': '160',
            'brand': 'JACKETS',
            'category': 'JACKETS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/jackets/blue-jean-jacket.png',
            isAddedToCart: false,
            id: 2,
        }, {
            'name': 'Grey Jean Jacket',
            'price': '170',
            'brand': 'JACKETS',
            'category': 'JACKETS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/jackets/grey-jean-jacket.png',
            isAddedToCart: false,
            id: 3,
        }, {
            'name': 'Brown Shearling',
            'price': '200',
            'brand': 'JACKETS',
            'category': 'JACKETS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/jackets/brown-shearling.png',
            isAddedToCart: false,
            id: 4,
        },


    ]
}

export const JacketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_JACKET_CART:
            return toggleCart(state,action.id);
        case types.ADD_ONE_JACKET:
            return addProduct(state,action.id);
        case types.SUB_ONE_JACKET:
            return subProduct(state,action.id);
        default:
            return state;
    }
}

export default JacketsReducer;