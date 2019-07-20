import React from 'react'
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'

function TodoList(props) {
    let allTodos = props.todos
    let allTodoTitles = allTodos.map(todo => {
        return <TodoListItem key={todo.id} todo={todo} />
    })

    return (
        <ul>
            {allTodoTitles}
            <TodoForm onSubmit={props.receiveTodo} />
        </ul>    
    )
}

export default TodoList