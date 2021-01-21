import React from "react"

function TodoForm (props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo"
                name="newTodo"
                value={props.state.newTodo}
                onChange={props.handleChange}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm