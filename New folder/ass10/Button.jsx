import React from 'react';

// Button component that accepts a label prop
const Button = ({ label = "Click Me" }) => {
    // Render a button element with styling
    return (
        <button style={{padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', margin: '10px', marginTop: '3px'}}>
            {/* Display the label prop text inside the button */}
            {label}
        </button>
    );
}

export default Button; // Export the component
