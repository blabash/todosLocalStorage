import React from 'react'
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {detail: false}
        
        this.toggleDone = this.toggleDone.bind(this)
        this.toggleDetails = this.toggleDetails.bind(this)
    }

    toggleDone(todo) {
        todo.done = !todo.done
        this.props.receive(todo)
    }

    toggleDetails() {
        this.setState({
            detail: !this.state.detail
        })
    }

    render() {
        const { todo } = this.props
        return (
            <li>
                <button onClick={this.toggleDetails}>
                    <h2>{todo.title}</h2>
                </button>

                <button onClick={() => this.toggleDone(todo)}>
                    { todo.done === false ? <h4>Done</h4> : <h4>Undo</h4> }
                </button>

                {this.state.detail ? 
                    <TodoDetailViewContainer todo={todo} /> : null}
            </li>    
        )
    }
}

// function TodoListItem({ todo, remove, receive }) {
//     let toggleDone = (todo) => {
//         todo.done = !todo.done
//         receive(todo)
//     }
//     return(
//         <li>
//             <h2>{todo.title}</h2>
//             <button onClick={() => toggleDone(todo)}>{todo.done === false ? 
//                 'Done' : 'Undo'}</button>
//             <button onClick={() => remove(todo)}>Delete</button>
//         </li>
//     )
// }

export default TodoListItem