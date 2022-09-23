import React, { useState } from 'react';

export default function Counter() {
    let [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }
    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div className="Counter">
            <h3>{counter}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}