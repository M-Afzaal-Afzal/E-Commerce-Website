import {useMemo} from 'react'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index.reducers'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/root-saga";


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store;

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

function initStore(initialState) {
    return createStore(
        persistedReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleWares))
    )
}


export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    sagaMiddleware.run(rootSaga);
    return _store
}

export function useStore(initialState) {
    return useMemo(() => initializeStore(initialState), [initialState])
}

