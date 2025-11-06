import React from 'react';
import { Link } from 'react-router-dom';

function ListItems({ todo }) {

    // console.log('Props in ListItems:', props);
  return (
    <div>
      <Link to={`/todo/${todo.id}`}>
       <h3>{todo.item}</h3>
      </Link>
     
    </div>
  );
}

export default ListItems;
