import React from 'react';

// Profile component that accepts a user object as a prop
const Profile = ({ user }) => {
    // Nested destructuring to extract name, email, street, city, and country
    const { name, email, address: { street, city, country } } = user

    return (
        // Container for the profile with styling
        <div style={{border: "1px solid #ccc",borderRadius: "8px",padding: "16px",margin: "16px",backgroundColor: "#f9f9f9",boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",maxWidth: "300px"
        }}>
             {/* Display the user's name */}
            <h2>{name}</h2>
            {/* Display the user's email */}
            <p>Email: {email}</p>
            {/* Address label */}
            <p>Address:</p>
            {/* Display the user's address */}
            <p>{street}, {city}, {country}</p>
        </div>
    );
}

export default Profile; // Export the component
