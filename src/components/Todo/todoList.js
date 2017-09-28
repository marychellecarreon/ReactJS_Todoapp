import React, { Component } from 'react';
import Todo from './todo';

class TodoList extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.todos.map((todo, i) => <Todo key={i} todo={todo}/>)}
        </ul>
      </div>
    );
  }
}
export default TodoList;
