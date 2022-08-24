import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/Todo/action";

function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const todo = useSelector((state) => ({ ...state.todo }));

  if (todo?.login) {
    return navigate("/", { replace: true });
  }
  return (
    <button className="btn btn-danger" onClick={() => dispatch(login())}>
      Login
    </button>
  );
}

export default Login;
