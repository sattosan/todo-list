import React, { useContext } from "react";

import Todo from "./Todo";
import AppContext from "../contexts/AppContext";

const Todos = () => {
  const { todos } = useContext(AppContext);
  return (
    <div className="todo-list">
      <h4>TODOリスト</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return <Todo todo={todo} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
