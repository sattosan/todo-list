import React, { useReducer } from "react";

import "../assets/stylesheets/App.css";
import TodoPage from "./TodoPage";
import reducer from "../reducers";
import AppContext from "../contexts/AppContext";

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{ todos, dispatch }}>
      <TodoPage />
    </AppContext.Provider>
  );
};

export default App;
