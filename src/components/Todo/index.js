import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, searchData, updateTodo } from "../../features/Todo/action";
import Sidebar from "../Sidbar";

function Todo() {
  const todo = useSelector((state) => ({ ...state.todo }));
  const dispatch = useDispatch();
  const [createTodo, setCreateTodo] = useState("");

  const todosData = useMemo(() => todo, [todo]);
  if (!todosData?.login) {
    window.location.href = "/login";
  }
  const handleSubmitTodo = () => {
    if (createTodo) {
      dispatch(
        addTodo({
          name: createTodo,
          completed: false,
        })
      );
      setCreateTodo("");
    }
  };

  const handleCompleted = (id) => {
    const newData = [...todo?.todos];
    const updatedData = newData?.map((data, index) => {
      if (index === id) {
        return {
          ...data,
          completed: true,
        };
      }
      return { ...data };
    });

    dispatch(updateTodo([...updatedData]));
  };
  const handleSearch = (e) => {
    const search = e.target.value;

    if (search) {
      const filterData = todo?.todos?.findIndex((td) =>
        td?.name?.includes(search)
      );
      dispatch(searchData(filterData));
    } else {
      dispatch(searchData(todo?.todos));
    }
    //   setTodoDatas()
  };
  const todos = todo?.searchTodo || todo?.todos;
  return (
    <div className="container mt-5">
      <div class="row">
        <div className="col-lg-4">
          <Sidebar />
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-12 mb-5">
              <input placeholder="Search" onChange={handleSearch} />
              <button onClick={handleSubmitTodo}>Search</button>
            </div>
            <div className="col-lg-12">
              <input
                placeholder="Add Todo"
                onChange={(e) => setCreateTodo(e.target.value)}
                value={createTodo}
              />
              <button onClick={handleSubmitTodo}>Add todo</button>
              <ul class="list-group mt-5">
                {todos?.map((todoList, index) => (
                  <>
                    <div
                      className={` ${
                        todoList?.completed && "todo-complete"
                      } mb-2`}
                      key={index}
                    >
                      <li class="list-group-item">{todoList?.name}</li>
                      {!todoList?.completed && (
                        <button
                          className="btn btn-primary"
                          onClick={() => handleCompleted(index)}
                        >
                          Completed
                        </button>
                      )}
                    </div>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
