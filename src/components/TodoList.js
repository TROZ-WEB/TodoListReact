import React, { Component } from 'react';

class TodoList extends Component {
  renderItems() {
    const { items } = this.props;

    return items.map((item, index) => {
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
    const { items } = this.props;

    return (
      <ul onSubmit={this.handleSubmit}>
        { this.renderItems(items) }
      </ul>
    );
  }
}

export default TodoList;