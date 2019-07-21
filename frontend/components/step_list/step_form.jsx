import React from 'react'

class StepForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            todo_id: this.props.todo_id,
            body: '',
            done: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault()
        let newStep = Object.assign(
            {},
            this.state,
            {id: new Date().getTime()}
        )
        this.props.receiveStep(newStep)
        console.log(newStep)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>title:
                        <input type="text" 
                               name="title"
                               value={this.state.title}
                               onChange={this.onChange}/>
                    </label>
                    <label>description:
                        <input type="text" 
                               name="body"
                               value={this.state.body}
                               onChange={this.onChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default StepForm