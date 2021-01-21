import React from "react"
import TodoItem from "./TodoItem"

function TodoList (props) {
    return (
        <ul>
            {
              props.todos.map((item, index) => (
                  <TodoItem key={item.id} item={item} handleTickTodo={props.handleTickTodo} handleRemoveTodo={props.handleRemoveTodo}/>
              ))
            }
        </ul>
    )
}

export default TodoList