import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
