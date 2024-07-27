import React from "react";
import { useState } from "react";

// Functional component for a counter
const Counter = () => {
    // State hook to manage the count value
    const [count, setCount] = useState(0)
    
    return (
        <div>
            {/* Title for the counter */}
            <h1 style={{fontSize: '3em', marginBottom: '3px', marginLeft: '6px'}}>Counter</h1>
            {/* Display the current count */}
            <p style={{fontSize: '2em', marginLeft: '19px'}}>{count}</p>
            {/* Button to increment the count */}
            <button onClick={() => setCount(count + 1)}
                style={{
                    padding: '10px 15px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    margin: '10px',
                    marginTop: '3px'
                }}
            >
                Increment</button>
            {/* Button to decrement the count */}
            <button onClick={() => setCount(count - 1)}
                style={{
                    padding: '10px 15px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    margin: '10px',
                    marginTop: '3px'
                }}
            >
                Decrement</button>
            {/* Button to reset the count to zero */}
            <button onClick={() => setCount(0)}
                style={{
                    padding: '10px 15px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    margin: '10px',
                    marginTop: '3px'
                }}
            >
                Reset</button>
        </div>
    );
};

export default Counter;
