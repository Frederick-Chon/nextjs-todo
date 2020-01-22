import React, { Component } from 'react';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';

class App extends Component {
    
    
    state = {
        todos: [
            // {id: 1, content: 'Go to the gym'},
            // {id: 2, content: 'Clean the room'}
        ]
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });
        this.setState({
            todos
        });
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="center card-panel teal lighten-1">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /> 
                <AddTodo addTodo={this.addTodo} />
            </div>
            
        );

    }
}

export default App;