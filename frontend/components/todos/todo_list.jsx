import React from 'react'
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'

function TodoList(props) {
    const { todos, receiveTodo, removeTodo } = props
    const todoItems = todos.map(todo => {
        return <TodoListItem 
                    key={todo.id} 
                    todo={todo}
                    remove={removeTodo} />
    })

    return (
        <ul>
            {todoItems}
            <TodoForm onSubmit={receiveTodo} />
        </ul>    
    )
}

export default TodoList