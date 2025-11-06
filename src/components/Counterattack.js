import React from 'react';
import { useState } from 'react';

function Counterattack() {
    const  [count, setcount]  = useState(0);
  return (
    <div>
        <h1>Counterattack Component</h1>

        <h1>{count}</h1>

        <div>
            <button onclick={ ()=> {setcount(count + 1)}}>Increment</button>
            <button onclick={ ()=> {setcount(count - 1)}}>Decrement</button>
        </div>
    </div>
  );
}

export default Counterattack;
