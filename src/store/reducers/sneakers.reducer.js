import * as types from '../actionTypes/actionTypes';

import {addProduct, subProduct, toggleCart} from './reducerUtils'

const initialState = {
    'name': 'SNEAKERS',
    'image': '/sneakers.jpg',
    products: [
        {
            'name': 'Adidas NMD',
            'price': '350',
            'brand': 'SNEAKERS',
            'category': 'SNEAKERS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/sneakers/adidas-nmd.png',
            isAddedToCart: false,
            id: 1,
        },
        {
            'name': 'Adidas Yeezy',
            'price': '300',
            'brand': 'SNEAKERS',
            'category': 'SNEAKERS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/sneakers/yeezy.png',
            isAddedToCart: false,
            id: 2,
        }, {
            'name': 'Black Converse',
            'price': '150',
            'brand': 'SNEAKERS',
            'category': 'SNEAKERS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/sneakers/black-converse.png',
            isAddedToCart: false,
            id: 3,
        }, {
            'name': 'Nike White AirForce',
            'price': '190',
            'brand': 'SNEAKERS',
            'category': 'SNEAKERS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/sneakers/white-nike-high-tops.png',
            isAddedToCart: false,
            id: 4,
        }, {
            'name': 'Nike Red High Tops',
            'price': '200',
            'brand': 'SNEAKERS',
            'category': 'SNEAKERS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/sneakers/nikes-red.png',
            isAddedToCart: false,
            id: 5,
        }, {
            'name': 'Nike Brown High Tops',
            'price': '200',
            'brand': 'SNEAKERS',
            'category': 'SNEAKERS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/sneakers/nike-brown.png',
            isAddedToCart: false,
            id: 6,
        }, {
            'name': 'Air Jordan Limited',
            'price': '220',
            'brand': 'SNEAKERS',
            'category': 'SNEAKERS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/sneakers/nike-funky.png',
            isAddedToCart: false,
            id: 7,
        }, {
            'name': 'Timberlands',
            'price': '250',
            'brand': 'SNEAKERS',
            'category': 'SNEAKERS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/sneakers/timberlands.png',
            isAddedToCart: false,
            id: 8,
        },

    ]
}

export const SneakersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_SNEAKER_CART:
            return toggleCart(state,action.id);
        case types.ADD_ONE_SNEAKER:
            return addProduct(state,action.id);
        case types.SUB_ONE_SNEAKER:
            return subProduct(state,action.id);
        default:
            return state;
    }
}

export default SneakersReducer;