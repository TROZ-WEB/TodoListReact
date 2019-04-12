import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoForm;