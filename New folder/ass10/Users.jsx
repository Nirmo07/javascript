import React from 'react';
import useFetch from '../useFetch';

const Users = () => {
    // Fetch user data from the API using custom hook
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')

    // Display loading message while data is being fetched
    if (loading) return <p>Loading...</p>
    // Display error message if there is an error
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

    return (
        <div>
            {/* Header for the user list */}
            <h1 style={{marginLeft:'3px'}}>User List</h1>
            {/* Display the list of users */}
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                {data && data.map(user => (
                    // List item for each user
                    <li key={user.id} style={{ marginBottom: '10px' ,marginLeft:'6px'}}>
                        {user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
