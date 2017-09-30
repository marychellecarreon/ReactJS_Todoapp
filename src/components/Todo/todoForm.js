import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

    updateText(event) {
      // console.log('updateText')
      // console.log(event.target.value)
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
      return (
          <div>
            <input
                onChange={(event) => this.updateText(event)}
                value={this.state.text}
                className="form-field"
                placeholder="Tasks I need to do"
           />
           <br />
           <center><button onClick={() => this.addTodo()} className="add-btn">Add Todo</button></center>
           </div>
      )
    }
}

export default TodoForm;
