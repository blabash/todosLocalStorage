import { RECEIVE_TODOS,
         RECEIVE_TODO } from '../actions/todo_actions'

const initialState = { //for store testing
    1 : {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
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
            newState = {...state, ...newTodo}
            return newState
        default:
            return state;
    }
}

export default todosReducer




// Sample State Shape
// {
//   "1": {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   "2": {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   },
// };