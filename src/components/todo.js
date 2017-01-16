import React, { Component, PropTypes } from 'react'

class Todo extends Component {
    render(){
        const {text} = this.props;
        return (
            <li>
              {text}
            </li>
        )
    }
}

Todo.propTypes = {
    text: PropTypes.string
}

export default Todo;
