import React from "react"

function TodoItem (props) {
    return (
        <li>
            {props.item.done ? 
            <span className='done' onClick={() => props.handleTickTodo(props.item.id)}>&#10003;</span>:
            <span className='undone' onClick={() => props.handleTickTodo(props.item.id)}>&#9675;</span>
            }
            {/* <span className={props.item.done ? 'done' : 'undone'} onClick={() => props.handleTickTodo(props.item.id)}>&#9675;</span> */}
            {props.item.text}
            <span className="remove" onClick={() => props.handleRemoveTodo(props.item.id)}>X</span>
        </li>
    )
}

export default TodoItem