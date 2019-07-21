import React from 'react'

import StepListContainer from "../../components/step_list/step_list_container";

class TodoDetailView extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { todo, removeTodo } = this.props
        return (
            <div>
                <p>{todo.body}</p>
                <button onClick={() => removeTodo(todo)}>Delete</button>
                <StepListContainer todo_id={todo.id} />
            </div>
        )
    }
}

export default TodoDetailView
