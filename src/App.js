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
        { done: false, text: 'Call fake API : https://api.myjson.com/bins/108ou5' },
      ],
    }
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <form>
          <input
            type="text"
            placeholder="Add a new todo"
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          {
            todos.map((item, index) => (
                <li key={index}>
                  <span className={item.done ? 'done' : 'undone'}>&#9675;</span>
                  {item.text}
                  <span className="remove">X</span>
                </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
