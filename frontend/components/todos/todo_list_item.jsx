import React from 'react'

function TodoListItem(props) {
    const {todo, remove} = props
    return(
        <li>{todo.title}: {todo.body}
            <button onClick={() => remove(todo)}>Delete</button>
        </li>
    )
}

export default TodoListItem