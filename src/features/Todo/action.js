import { ADD_TODO, LIST_TODOS, LOGIN, LOGOUT, SEARCH_DATA, UPDATE_TODO } from "./type";

export const login = () => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};
export const listTodos = () => {
  return (dispatch) => {
    dispatch({
      type: LIST_TODOS,
    });
  };
};

export const addTodo = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TODO,
      payload: { ...data },
    });
    dispatch(listTodos());
  };
};
export const updateTodo = (data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TODO,
      payload: [...data],
    });
    dispatch(listTodos());
  };
};


export const searchData = (data) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_DATA,
      payload: [...data],
    });
    dispatch(listTodos());
  };
};
