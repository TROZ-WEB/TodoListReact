import React, { Component } from 'react';

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
