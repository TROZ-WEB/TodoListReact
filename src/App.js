import React, { Component } from 'react';
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, done: false, text: 'Add new todo with form' },
        { id: 2, done: false, text: 'Create Components : TodoForm, TodoList, TodoItem ...' },
        { id: 3, done: false, text: 'Mark done an item' },
        { id: 4, done: false, text: 'Remove an item' },
      ],
      // todos: [],
      newTodo : ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTickTodo = this.handleTickTodo.bind(this)
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this)
  }

  // componentDidMount() {
  //   fetch("https://my-json-server.typicode.com/troz-web/todolist") // Access to fetch has been blocked by CORS policy
  //     .then(response => response.json)
  //     .then(response => {
  //       const {TodoList} = response.data
  //       this.setState({ todos: TodoList })
  //     })
  // }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    
    if (this.state.newTodo !== "") {
      this.setState(prevState => {
        let newTodoId = prevState.todos[prevState.todos.length-1].id + 1
        let newTodoItem = {
          id: newTodoId,
          done: false,
          text: prevState.newTodo
        }
        let newTodos = [...prevState.todos, newTodoItem]

        return {
          todos: newTodos,
          newTodo : ""
        }
      })
    }
    else {
      alert ('Please fill the "Add a new todo" field')
    }
  }

  handleTickTodo(id) {
    this.setState(prevState => {
      let updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
            todo.done = !todo.done
        }
        return todo
      })
      return {
          todos: updatedTodos
      }
    })
  }

  handleRemoveTodo(id) {
    this.setState(prevState => {
      let updatedTodos = prevState.todos.filter(item => item.id!==id)
      return {
          todos: updatedTodos
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/>
          <TodoList todos={this.state.todos} handleTickTodo={this.handleTickTodo} handleRemoveTodo={this.handleRemoveTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
