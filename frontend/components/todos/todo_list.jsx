import React from 'react'
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'

function TodoList({ todos, receiveTodo, removeTodo }) {
    const todoItems = todos.map(todo => {
        return <TodoListItem 
                    key={todo.id} 
                    todo={todo}
                    remove={removeTodo}
                    receive={receiveTodo} />
    })

    return (
        <ul>
            {todoItems}
            <TodoForm onSubmit={receiveTodo} />
        </ul>    
    )
}

export default TodoList