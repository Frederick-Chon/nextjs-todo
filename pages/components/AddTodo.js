import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
             <div>
                 <form onSubmit={this.handleSubmit} >
                    <label>Add a new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} ></input> 
                    <div className="btn-floating btn-large waves-effect waves-light red right" onClick={this.handleSubmit.bind(this)}>+</div>
                 </form>
             </div>
        )
    }
}

export default AddTodo;