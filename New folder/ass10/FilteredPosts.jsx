import React, { useState } from 'react';
import useFetchWithParams from '../useFetchWithParams';

const FilteredPosts = () => {
    const [userId, setUserId] = useState('') // State to hold the userId input value
    const [fetchTriggered, setFetchTriggered] = useState(false) // State to track if fetch is triggered
    
    // Custom hook to fetch posts based on userId
    const { data, loading, error } = useFetchWithParams(
        'https://jsonplaceholder.typicode.com/posts',
        { userId }
    )

    // Handler function to trigger the fetch operation
    const handleFetch = () => {
        if (userId) {
            setFetchTriggered(true) // Trigger fetch if userId is not empty
        }
    }

    // Display loading message while data is being fetched
    if (loading) return <p>Loading...</p>
    // Display error message if there is an error
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

    return (
        <div style={{ textAlign: 'center' }}>
            {/* Input field for entering userId */}
            <input
                type="number"
                placeholder="Enter userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                style={{
                    width: '40%',
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    marginBottom: '10px',
                    marginLeft: '6px',
                    marginTop: '6px',
                    marginRight:'4px'
                }}
            />
            {/* Button to trigger the fetch operation */}
            <button onClick={handleFetch}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    borderRadius: '5px',
                }}
            >
                Fetch Posts</button>
            {fetchTriggered && (data ? (
                // Display the list of posts if data is available
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px',textAlign: 'left' }}>
                    {data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            ) : (
                // Display message if no posts are found
                <p>No posts found</p>
            ))}
        </div>
    );
};

export default FilteredPosts;
