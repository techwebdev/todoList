import {
  ADD_TODO,
  LIST_TODOS,
  LOGIN,
  LOGOUT,
  SEARCH_DATA,
  UPDATE_TODO,
} from "./type";

const initialState = {
  todos: [],
  login: false,
  searchTodo: [],
};

const TodoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        todos: [],
        login: true,
      };
    case LOGOUT:
      return {
        todos: [],
        login: false,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: [...payload],
      };
    case LIST_TODOS:
      return {
        ...state,
      };
    case SEARCH_DATA:
      return {
        ...state,
        searchTodo: payload,
      };
    default:
      return state;
  }
};
export default TodoReducer;
