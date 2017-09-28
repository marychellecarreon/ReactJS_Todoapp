import React, { Component } from 'react';
import './App.css';
import TodoForm from './Components/Todo/TodoForm';
import TodoList from './Components/Todo/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filtered_todos: []
    }
  }

addNewTodo(todo) {
  console.log(todo)
  this.setState({
    todos: this.state.todos.concat(todo),
    filtered_todos: this.state.todos.concat(todo)
  })
}

search(e) {
  var search_term = e.target.value;

  var filtered = this.state.todos.filter(function(todo){
    return todo.includes(search_term);
  });

  this.setState({
    filtered_todos: filtered
  })
}

render() {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-6 col-md-offset-3 card">
        <div className="head-block">
        <h1 className="card-title">Mary Chelle's Todos</h1>

        <input placeholder = 'Search' onChange={(e) => this.search(e)} className="search-field" />
        </div>
        <div className="body-block">
          <TodoForm addNewTodoFunc={this.addNewTodo.bind(this)} />
          <TodoList todo_data={this.state.filtered_todos} />
        </div>
      </div>
    </div>
  );
}
}

export default App;
