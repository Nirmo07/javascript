import React from 'react';

// UserCard component that accepts username, email, and age as props
const UserCard = ({ username, email, age }) => {
    return (
        // Card container with styling for user information
        <div style={{border: "1px solid #ccc",borderRadius: "8px",padding: "16px",margin: "16px",backgroundColor: "#f9f9f9",boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",maxWidth: "300px"}}>
            {/* Display the user's username */}
            <h2>{username}</h2>
            {/* Display the user's email */}
            <p>Email: {email}</p>
            {/* Display the user's age */}
            <p>Age: {age}</p>
        </div>
    );
}

export default UserCard; // Export the component
