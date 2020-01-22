import React, { Component } from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos ? (
        todos.map(todo => {
            return (
                <div className="collection hoverable" key={todo.id} >
                    <span className="" onClick={() => {deleteTodo(todo.id)}} >{todo.content}</span>
                    
                </div>
            )
        })
    ) : (
        <p>You currently have no todo's! Click on the todo to delete it!</p>
    );


    return(
        <div>
            {todoList}
        </div>
    )
}

export default Todos;