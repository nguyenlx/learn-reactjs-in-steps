import React from 'react';
import DisplayList from './DisplayList';

export default class App extends React.Component {

  constructor () {
    super();
    this.state = { title: '', todos:  [
                                        { title: 'eggs', done: false },
                                        { title: 'banana', done: false },
                                        { title: 'bread', done: false }
                                      ] };
  }

  handleDelete (titleToBeDeleted) {
    var newTodos = this.state.todos.filter( (todo) => {
      return todo.title != titleToBeDeleted
    } )

    this.setState({ todos: newTodos});
  }

  handleSubmit (event) {
    event.preventDefault();

    var title = this.state.title;
    var newTodos = this.state.todos.concat({ title: title, done: false });

    this.setState({ title: '', todos: newTodos });
  }

  handleChange (event) {
    var title = event.target.value;
    this.setState({ title: title });
  }

  render () {
    return  <div>
              <p> TODO </p>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input onChange={this.handleChange.bind(this)} value={this.state.title} />
                <button> Submit </button>
              </form>

              <p>
                Number of total tasks: { this.state.todos.length }
              </p>
              <p>
                Number of total tasks done: { this.state.todos.filter((todo) => { todo.done }).length }
              </p>

              <DisplayList
                handleDelete={this.handleDelete.bind(this)}
                todos={this.state.todos}  />
            </div>;
  }
}
