import React from 'react'
import { receiveTodo } from '../../actions/todo_actions';

function TodoListItem({ todo, remove, receive }) {
    let toggleDone = (todo) => {
        todo.done = !todo.done
        receive(todo)
    }
    return(
        <li>
            {todo.title}: {todo.body}
            <button onClick={() => toggleDone(todo)}>{todo.done === false ? 
                'Done' : 'Undo'}</button>
            <button onClick={() => remove(todo)}>Delete</button>
        </li>
    )
}

export default TodoListItem