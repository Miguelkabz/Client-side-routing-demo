import React from 'react';
import { useParams } from 'react-router-dom';


function ToDoPage({todos}) {

    console.log('Props in ToDoPage:', todos);

    const {id} = useParams();

    const todoId = Number(id);

    const todo = todos.find(todo => todo.id === todoId);
    console.log('ToDo item:', todo);
  return (
    <div>
        <h2>This is the Single ToDo Page</h2>
        {todo ? (
            <div>
                <h3>{todo.item}</h3>
                </div>
        ) : (
            <h3>ToDo item not found</h3>
        )}
    </div>
  )
}

export default ToDoPage;
