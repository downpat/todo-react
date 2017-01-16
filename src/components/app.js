import React, { Component, PropTypes } from 'react';
import TodoList from './todo_list.js'
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/index';

class App extends Component {

    componentWillMount() {
        this.props.fetchTodos();
    }

    render() {
        const { todos } = this.props;
        return (
          <div>
              <TodoList todos={todos}/>
          </div>
        );
    }
}

App.propTypes = {
    fetchTodos: PropTypes.func,
    todos: PropTypes.array
};

function mapStateToProps(state) {
    return {
        todos: state.todos.get('todos'),
    };
}

export default connect(mapStateToProps, { fetchTodos })(App);
