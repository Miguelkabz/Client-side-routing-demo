import React from 'react';
import todos from '../asserts/Data';
import ListItems from '../components/ListItems';

function ToDoList() {
  return (
    <div>
      <h2>This is the Todo list page</h2>
      {todos.map((todo) => (
        <ListItems todo={todo} />
      ))}
    </div>
  );
}

export default ToDoList;
