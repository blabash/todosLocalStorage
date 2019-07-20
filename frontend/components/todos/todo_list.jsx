import React from 'react'
import TodoListItem from './todo_list_item'

function TodoList(props) {
    let allTodos = props.todos
    let allTodoTitles = allTodos.map(todo => {
        return <TodoListItem key={todo.id} todo={todo} />
    })

    return (
        <ul>
            {allTodoTitles}
        </ul>    
    )
}

export default TodoList