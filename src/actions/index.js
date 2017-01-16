import TodoData from '../todo_data'

export function fetchTodos() {
    return {
        type: 'FETCH_TODOS',
        payload: {
          todos: TodoData
        }
    };
}
