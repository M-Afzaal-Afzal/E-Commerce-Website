import * as types from '../actionTypes/actionTypes'
import {toggleCart,addProduct,subProduct} from "./reducerUtils";

const initialState = {
    'name': 'HATS',
    'image': '/hats.jpg',
    products: [
        {
            'name': 'Brown Brim',
            'price': '15',
            'brand': 'HATS',
            'category': 'HATS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/hats/brown-brim.png',
            isAddedToCart: false,
            id: 1,
        },
        {
            'name': 'Blue Beanie',
            'price': '18',
            'brand': 'HATS',
            'category': 'HATS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/hats/blue-beanie.png',
            isAddedToCart: false,
            id: 2,
        },
        {
            'name': 'Brown Cowboy',
            'price': '13',
            'brand': 'HATS',
            'category': 'HATS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/hats/brown-cowboy.png',
            isAddedToCart: false,
            id: 3,
        }, {
            'name': 'Grey Brim',
            'price': '19',
            'brand': 'HATS',
            'category': 'HATS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/hats/grey-brim.png',
            isAddedToCart: false,
            id: 4,
        }, {
            'name': 'Green Beanie',
            'price': '12',
            'brand': 'HATS',
            'category': 'HATS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/hats/green-beanie.png',
            isAddedToCart: false,
            id: 5,
        }, {
            'name': 'Palm Tree Cap',
            'price': '18',
            'brand': 'HATS',
            'category': 'HATS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/hats/palm-tree-cap.png',
            isAddedToCart: false,
            id: 6,
        }, {
            'name': 'Red Beanie',
            'price': '28',
            'brand': 'HATS',
            category: 'HATS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/hats/red-beanie.png',
            isAddedToCart: false,
            id: 7,
        }, {
            'name': 'Wolf Cap',
            'price': '33',
            'brand': 'HATS',
            'category': 'HATS',
            'variant': 'Gray',
            'quantity': 1,
            image: '/hats/wolf-cap.png',
            isAddedToCart: false,
            id: 8,
        },

    ]
}

const HatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_HAT_CART:
            return toggleCart(state,action.id);
        case types.ADD_ONE_HAT:
            return addProduct(state,action.id);
        case types.SUB_ONE_HAT:
            return subProduct(state,action.id);
        default:
            return state;
    }
}

export default HatsReducer;