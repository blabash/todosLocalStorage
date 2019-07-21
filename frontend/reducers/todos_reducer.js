import { RECEIVE_TODOS,
         RECEIVE_TODO,
         REMOVE_TODO } from '../actions/todo_actions'

const initialState = { //for store testing
    1 : {
        id: 1,
        title: 'wash car',
        body: 'thing is nasty',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'dog is nasty too',
        done: true
    }
}

const todosReducer = (state = initialState, action) => {
    Object.freeze(state)
    let newState = {}

    switch (action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach(todo => {
                newState[todo.id] = todo
            })
            return newState
        case RECEIVE_TODO:
            let newTodo = {[action.todo.id]: action.todo}
            return {...state, ...newTodo}
        case REMOVE_TODO:
            newState = {...state}
            delete newState[action.todo.id]
            return newState
        default:
            return state;
    }
}

export default todosReducer
