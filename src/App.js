import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { done: false, text: 'Make input form available' },
        { done: false, text: 'Create TodoForm, TodoList and TodoItem components' },
        { done: false, text: 'Mark done a todo item' },
        { done: false, text: 'Remove todo item' },
      ],
    }
  }

  renderTodoItems() {
    const { todos } = this.state;

    return todos.map((item, index) => {
      return (
        <li key={index}>
          <span className={item.done ? 'done' : 'undone'}>&#9675;</span>
          {item.text}
          <span className="remove">X</span>
        </li>
      )
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            placeholder="Add a new todo"
          />
          <button type="submit">Add</button>
        </form>

        <ul onSubmit={this.handleSubmit}>
          { this.renderTodoItems() }
        </ul>
      </div>
    );
  }
}

export default App;
