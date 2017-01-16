import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

class TodoList extends Component {

    render() {
        const { todos } = this.props;
        return(
          <div>
            List of things todo:
              <ul>
                {todos.map(todo =>
                  <Todo {...todo} key={todo.id}/>
                )}
              </ul>
          </div>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.array
}

export default TodoList;
