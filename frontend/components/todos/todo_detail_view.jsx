import React from 'react'

class TodoDetailView extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { todo, remove } = this.props
        return (
            <div>
                <h3>{todo.body}</h3>
                <button onClick={() => remove(todo)}>Delete</button>
            </div>
        )
    }
}

export default TodoDetailView
