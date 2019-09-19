import React from 'react';

import Todo from './Todo';

const Todos = () => {
  return (
    <table>
      <thead>
        <th>ID</th>
        <th>TODO</th>
      </thead>
      <tbody>
        <Todo />
      </tbody>
    </table>
  )
}

export default Todos;