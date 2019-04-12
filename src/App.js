import React, { Component } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { done: false, text: 'Make input form available' },
        { done: false, text: 'Add item' },
        { done: false, text: 'Create component TodoItem' },
        { done: false, text: 'Mark done a todo item' },
        { done: false, text: 'Remove todo item' },
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <TodoForm addItem={this.addItem} />
        <TodoList items={this.state.todos} markToDone/>
      </div>
    );
  }
}

export default App;
