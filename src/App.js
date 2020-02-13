import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, done: false, text: 'use React Hooks (optional)' },
        { id: 1, done: false, text: 'Add new todo with form' },
        { id: 2, done: false, text: 'Create TodoForm, TodoItem components' },
        { id: 3, done: false, text: 'Mark done a todo item' },
        { id: 4, done: false, text: 'Remove todo item' },
        { id: 5, done: false, text: 'Call fake API with axios : https://api.myjson.com/bins/108ou5' },
      ],
    }
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <div className="wrapper">
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
                  <li key={item.id}>
                    <span className={item.done ? 'done' : 'undone'}>&#9675;</span>
                    {item.text}
                    <span className="remove">X</span>
                  </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
