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
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const newTodo = Object.assign({}, this.state, { id: new Date().getTime() })
        this.props.onSubmit(newTodo)
        this.setState({
            title: '',
            body: '',
        })
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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