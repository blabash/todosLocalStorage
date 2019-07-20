import React from 'react'

class TodoForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            body: '',
            done: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        let newTodo = this.state
        newTodo.id = new Date().getTime() //get a unique ID, should put this in a util folder
        this.props.onSubmit(newTodo)
        console.log(newTodo)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" 
                        name="title" 
                        value={this.state.title}
                        onChange={this.onChange}/> 
                <input type="text" 
                        name="body" 
                        value={this.state.body}
                        onChange={this.onChange}/> 
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default TodoForm