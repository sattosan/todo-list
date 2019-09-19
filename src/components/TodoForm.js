import React, { useContext, useState } from "react";

import { CREATE_TODO, DELETE_ALL_TODOS } from "../actions";
import AppContext from "../contexts/AppContext";

const TodoForm = () => {
  const { todos, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");

  const addTodo = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_TODO,
      title
    });
  };

  const deleteAllTodos = e => {
    e.preventDefault();
    dispatch({
      type: DELETE_ALL_TODOS
    });
  };

  return (
    <div className="todo-form">
      <h4>Todo作成</h4>
      <form>
        <div className="todo-form-input">
          <label id="formTodoTitle">タイトル</label>
          <input
            id="formTodoTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="todo-form-operate">
          <button onClick={addTodo}>TODO作成</button>
          <button onClick={deleteAllTodos} disabled={todos.length === 0}>
            すべてのTODOを削除
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
