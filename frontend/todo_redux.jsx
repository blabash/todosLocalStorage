import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'

//for window testing
import configureStore from './store/store'
import { allTodos } from './reducers/selectors'

let store = configureStore()
window.store = store
window.allTodos = allTodos
//end window test


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('content')
    ReactDOM.render(<Root store={store} />, root)
})