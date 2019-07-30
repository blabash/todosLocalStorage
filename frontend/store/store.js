import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers/root_reducer'

const configureStore = () => {
    const initialState = localStorage.getItem('state') ? 
        JSON.parse(localStorage.getItem('state')) : null
    const store = createStore(rootReducer, initialState, applyMiddleware(logger))
    store.subscribe(() => {
        localStorage.setItem('state', JSON.stringify(store.getState())) 
    })
    return store
}

export default configureStore