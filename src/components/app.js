import React, { Component, PropTypes } from 'react';
import TodoList from './todo_list.js'
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/index';
import { addTodo } from '../actions/addTodo';

class App extends Component {

    componentWillMount() {
        this.props.fetchTodos();
    }

    handleAddTodo() {
        //let todos = this.props.todos.slice();
        //todos.push({ id: 1, text: 'Get milk!' });
        //this.props.todos = todos;
        alert('hello!');
    }

    render() {
        const { todos } = this.props;
        console.dir(this.props);
        return (
          <div>
              <TodoList todos={todos}/>
              <input type="text"></input>
              <button onClick={this.handleAddTodo()}>Add Todo</button>
          </div>
        );
    }
}

App.propTypes = {
    fetchTodos: PropTypes.func,
    addTodo: PropTypes.func,
    todos: PropTypes.array
};

function mapStateToProps(state) {
    return {
        todos: state.todos.get('todos'),
    };
}

export default connect(mapStateToProps, { fetchTodos, addTodo })(App);
