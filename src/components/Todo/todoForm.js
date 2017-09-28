import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  addNewTodo(todo) {
    console.log(todo);
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }
  updateText(event) {
    this.setState({
      text: event.target.value
    })

  }
  addTodo() {
    this.props.addNewTodoFunc(this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    return(
      <div>
        <input
          onChange={(event) => this.updateText(event)}
          value={this.state.text}
        />
        <button onClick={() => this.addTodo()}>Add Todo</button>
      </div>
    )
  }
}

export default TodoForm;
