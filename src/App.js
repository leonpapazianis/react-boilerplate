import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm } from './components/todo/TodoForm';
import { TodoList } from './components/todo/TodoList';
import { addTodo, generateId, findById, toggleTodo, updateTodo } from './lib/TodoHelpers';
class App extends Component {
  state = {
    todos: [],
    currentTodo: '',
  };
  handleToggle = id => {
    const todo = findById(this.state.todos, id);
    const toggled = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggled);
    this.setState({todos: updatedTodos});
  }
  handleSubmit = event => {
    event.preventDefault();
    const newTodo = { id: generateId(), name: this.state.currentTodo, isComplete: false };
    const updateTodos = addTodo(this.state.todos, newTodo);
    this.setState({ todos:  updateTodos, currentTodo: '', errorMessage: '' });
  }
  handleEmptySubmit = event => {
    event.preventDefault();
    this.setState({ errorMessage: 'Please suply a todo name!' });
  }
  handleInputChange = event => {
    this.setState({ currentTodo: event.target.value });
  }
  render = () => {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            currentTodo={this.state.currentTodo}/>
          <TodoList handleToggle={this.handleToggle} todos={this.state.todos}/>
        </div>
      </div >
    );
  }
}
export default App;
