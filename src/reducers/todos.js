import { List, Map } from 'immutable';
import TodoData from '../todo_data.js';

export let initialState = Map({
  todos: []
});

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return state.merge(Map({ todos: action.payload.todos }));
    default:
      return state
  }
}

export default todos
